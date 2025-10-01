import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const file: File | null = data.get('image') as unknown as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const timestamp = Date.now();
        const fileExtension = path.extname(file.name);
        const filename = `${timestamp}${fileExtension}`;
        
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
        await mkdir(uploadsDir, { recursive: true });

        const bytes = await file.arrayBuffer();
        const filepath = path.join(uploadsDir, filename);
        await writeFile(filepath, new Uint8Array(bytes));
        
        const imageUrl = `/uploads/${filename}`;
        
        return NextResponse.json({
            success: true,
            data: { url: imageUrl }
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}