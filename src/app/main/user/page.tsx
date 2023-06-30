"use client"
import { useRouter } from 'next/navigation'
 
export default function User() {
  const router = useRouter()
  return <p>Post: {router.query}</p>
}