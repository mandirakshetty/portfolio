import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const resumeDir = path.join(process.cwd(), "my_resume_pdf")

    if (!fs.existsSync(resumeDir)) {
      return new NextResponse("Resume directory not found", { status: 404 })
    }

    const files = fs.readdirSync(resumeDir).filter((file) => file.toLowerCase().endsWith(".pdf"))

    if (files.length === 0) {
      return new NextResponse("No resume PDF found in folder", { status: 404 })
    }

    // Sort by file modified time descending to always get the latest uploaded PDF
    const latestFile = files
      .map((file) => ({
        file,
        mtime: fs.statSync(path.join(resumeDir, file)).mtimeMs,
      }))
      .sort((a, b) => b.mtime - a.mtime)[0].file

    const filePath = path.join(resumeDir, latestFile)
    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Mandira_K_Shetty_Resume.pdf"`,
      },
    })
  } catch (error) {
    console.error("Error serving resume PDF:", error)
    return new NextResponse("Failed to load resume PDF", { status: 500 })
  }
}
