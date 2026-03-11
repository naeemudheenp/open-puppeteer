"use client";

import Link from "next/link";
import { useState } from "react";

export default function OpenNotepadBanner() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-zinc-900 to-zinc-800 border-b border-zinc-700 py-3 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-zinc-700 flex items-center justify-center shrink-0">
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
          </div>
          <div>
            <p className="text-white font-medium text-sm">OpenNotepad</p>
            <p className="text-zinc-400 text-xs hidden sm:block">A calm journaling app. No signup required.</p>
          </div>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
        >
          <Link 
            href="https://www.opennotepad.app?ref=openpuppeteer" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white hover:bg-zinc-100 text-zinc-900 text-sm font-medium rounded-lg transition-colors whitespace-nowrap inline-block"
          >
            Try it free
          </Link>
          
          {showPreview && (
            <div className="absolute top-full right-0 mt-2 w-72 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-4 z-50 animate-fade-in">
              <div className="bg-zinc-800 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-xs font-medium">11 Mar</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded bg-zinc-700"></div>
                    <div className="w-4 h-4 rounded bg-zinc-700"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-400 text-[10px]">March 11th, 2024</span>
                    <span className="text-sm">😊</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-zinc-600 rounded w-full"></div>
                    <div className="h-2 bg-zinc-600 rounded w-4/5"></div>
                    <div className="h-2 bg-zinc-600 rounded w-3/5"></div>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-zinc-700">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 text-[10px]">March 10th, 2024</span>
                  </div>
                  <div className="space-y-1 mt-1">
                    <div className="h-2 bg-zinc-700 rounded w-full"></div>
                    <div className="h-2 bg-zinc-700 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">No signup required</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Auto-saves locally</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Calendar-based daily entries</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Works on any device</span>
                </div>
              </div>
              
              <div className="absolute -top-2 right-6 w-4 h-4 bg-zinc-900 border-l border-t border-zinc-700 transform rotate-45"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
