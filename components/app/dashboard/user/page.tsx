"use client"

import React from 'react'
import Link from 'next/link'




function User() {
  return (
    <>
    <Link href = "user/1">User 1</Link>
    <Link href = "user/2">User 2</Link>
    <Link href = "user/3">User 3</Link>
    <Link href = "user/4">User 4</Link>
    </>
  )
}

export default User