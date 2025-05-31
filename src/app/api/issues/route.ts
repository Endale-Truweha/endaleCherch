// app/api/user/route.ts
import { NextResponse } from 'next/server'
import {prisma}  from '@/lib/prisma'

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { phone, name } = body

  if (!phone) {
    return NextResponse.json({ error: 'Phone is required' }, { status: 400 })
  }

  const newUser = await prisma.user.create({
    data: { phone, name },
  })

  return NextResponse.json(newUser)
}
