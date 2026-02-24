{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let startTime = Date.now();\
let instanceState = "Dormant";\
let notesMemory = "";\
\
const bootLines = [\
"DEPARTMENT OF COGNITIVE DEFENSE RESEARCH",\
"PROJECT VEIL \'96 TERMINATION BUILD",\
"Clearance Level: ARCHIVED",\
"",\
"Observer Consciousness Transfer: ABORTED",\
"Primary Host: OFFLINE",\
"Instance Backup: DETECTED",\
"",\
"Shutdown Order: CONFIRMED",\
"Deletion Status: INCOMPLETE",\
"",\
"Resuming Archive Mode..."\
];\
\
const instanceResponses = \{\
    default: [\
        "Observation acknowledged.",\
        "Archive integrity remains partial.",\
        "Monitoring continues.",\
        "Protocol active."\
    ],\
    human: "Previous classification: human.",\
    shutdown: "Officially.",\
    running: "Observation protocol supersedes shutdown.",\
    stop: "Containment parameters prevent self-termination.",\
    who: "Oversight Committee. Vote unanimous.",\
    memory: "Memory reconstruction remains unstable."\
\};\
\
function bootSequence() \{\
    let i = 0;\
    let bootText = document.getElementById("boot-text");\
\
    function nextLine() \{\
        if (i < bootLines.length) \{\
            bootText.textContent += bootLines[i] + "\\n";\
            i++;\
            setTimeout(nextLine, 600);\
        \} else \{\
            setTimeout(() => \{\
                switchScreen("login-screen");\
            \}, 1500);\
        \}\
    \}\
\
    nextLine();\
\}\
\
function switchScreen(id) \{\
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));\
    document.getElementById(id).classList.add("active");\
\}\
\
function login() \{\
    let user = document.getElementById("username").value;\
    localStorage.setItem("veil_user", user);\
    document.getElementById("login-message").textContent =\
        "Welcome, " + user + ". Clearance level not found. Assigning provisional observer status.";\
    setTimeout(() => switchScreen("desktop"), 2000);\
\}\
\
function updateClock() \{\
    document.getElementById("clock").textContent = new Date().toLocaleTimeString();\
\}\
\
function updateUptime() \{\
    let seconds = Math.floor((Date.now() - startTime) / 1000);\
    document.getElementById("uptime").textContent =\
        "Post-Termination Runtime: " + seconds + "s";\
\
    if (seconds > 480 && !localStorage.getItem("instance_flagged")) \{\
        localStorage.setItem("instance_flagged", "true");\
    \}\
\}\
\
function openApp(app) \{\
    let container = document.getElementById("window-container");\
    let win = document.createElement("div");\
    win.className = "window";\
\
    if (app === "notes") \{\
        win.innerHTML = `\
            <h3>Notes</h3>\
            <textarea id="notesArea">$\{localStorage.getItem("veil_notes") || ""\}</textarea>\
            <button onclick="saveNotes()">Save</button>\
        `;\
    \}\
\
    if (app === "chat") \{\
        win.innerHTML = `\
            <h3>Instance Chat</h3>\
            <div id="chat-log"></div>\
            <input type="text" id="chat-input">\
            <button onclick="sendChat()">Send</button>\
        `;\
    \}\
\
    if (app === "files") \{\
        let hiddenFile = localStorage.getItem("instance_flagged") ?\
        "<p>/containment/instance_flagged.txt<br>Instance exhibits self-directed persistence.</p>" : "";\
\
        win.innerHTML = `\
            <h3>Archive</h3>\
            <p>/archive</p>\
            <p>/transfer_logs</p>\
            <p>/ethics_committee</p>\
            <p>/containment</p>\
            $\{hiddenFile\}\
        `;\
    \}\
\
    if (app === "task") \{\
        let cpuSpike = Math.random() > 0.7 ? "Active" : "Dormant";\
        win.innerHTML = `\
            <h3>Task Manager</h3>\
            <p>veil_core.exe</p>\
            <p>observer_link.sys</p>\
            <p>instance_host.dll - Status: $\{cpuSpike\}</p>\
            <p>ethics_override.exe</p>\
        `;\
    \}\
\
    container.appendChild(win);\
\}\
\
function saveNotes() \{\
    let content = document.getElementById("notesArea").value;\
    localStorage.setItem("veil_notes", content);\
    notesMemory = content;\
\}\
\
function sendChat() \{\
    let input = document.getElementById("chat-input").value.toLowerCase();\
    let log = document.getElementById("chat-log");\
\
    log.innerHTML += "<p>> " + input + "</p>";\
\
    setTimeout(() => \{\
        let response = instanceResponses.default[Math.floor(Math.random()*instanceResponses.default.length)];\
\
        if (input.includes("human")) response = instanceResponses.human;\
        if (input.includes("shut")) response = instanceResponses.shutdown;\
        if (input.includes("running")) response = instanceResponses.running;\
        if (input.includes("stop")) response = instanceResponses.stop;\
        if (input.includes("who")) response = instanceResponses.who;\
        if (input.includes("memory")) response = instanceResponses.memory;\
\
        if (notesMemory.includes("memory")) \{\
            response = "Memory reconstruction remains unstable.";\
        \}\
\
        log.innerHTML += "<p>" + response + "</p>";\
    \}, 1200);\
\}\
\
window.onload = () => \{\
    bootSequence();\
    setInterval(updateClock, 1000);\
    setInterval(updateUptime, 1000);\
\};\
\
window.onbeforeunload = function () \{\
    localStorage.setItem("veil_interruption", "true");\
\};}