/* eslint-disable @next/next/no-img-element */
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/registry/new-york/ui/badge"
import { NavigationMenuDemo } from "./navigation-menu"
import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  query,
  startAfter,
  updateDoc,
} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBbh73d_g_CVG0PZPlljzC6d8U-r0DRTFk",
  authDomain: "snap-workspace.firebaseapp.com",
  projectId: "snap-workspace",
  storageBucket: "snap-workspace.appspot.com",
  messagingSenderId: "1092527848130",
  appId: "1:1092527848130:web:a6ad15060f8d379b43595b",
  measurementId: "G-JVEZGJHL8H"
}

const app = initializeApp(firebaseConfig)
const db: any = getFirestore(app)
const auth = getAuth(app);






export function MainNav() {
  
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <img className="h-20 w-auto" src="./logo.png" alt="logo" />
      </Link>
      <nav className="flex items-center text-sm lg:gap-6">
        {auth.currentUser ? (<>
          <Link
            href="/home"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/home" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Home
          </Link>
          <Link
            href="/profile"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/profile" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Profile
          </Link>
        </>) :
          <NavigationMenuDemo />}

        <Link
          href="/teachers"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/teachers" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Teachers
        </Link>
        <Link
          href="/students"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/students" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Students
        </Link>
        <Link
          href="/submissions"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/submissions" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Submissions
        </Link>
        {/* <Link
          href="/supports"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/supports" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Supports
        </Link> */}
        {/* <Link
          href="/profile"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/profile" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Profile
        </Link> */}
        {/* <Link
          href="/profile"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/profile" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Profile
        </Link> */}
        {/* <Link
          href="/settings"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/settings" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Settings
        </Link> */}
        {/* <Link
          href="/whiteboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/whiteboard" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Whiteboard
        </Link>
        <Link
          href="/planner"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/planner" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Planner
        </Link> */}
        {/* <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  )
}