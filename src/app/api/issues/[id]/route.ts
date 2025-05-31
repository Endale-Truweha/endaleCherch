// app/api/user/[id]/route.ts
import {prisma}  from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()
  const user = await prisma.user.update({
    where: { id: Number(params.id) },
    data: body,
  })
  return NextResponse.json(user)
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await prisma.user.delete({
    where: { id: Number(params.id) },
  })
  return NextResponse.json({ message: 'User deleted' })
}
