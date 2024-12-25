# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js applications where attempting to start a server on a port that is already in use leads to unexpected behavior or crashes.

## The Problem

The `bug.js` file contains a simple HTTP server that listens on port 8080. If another application (or a previous instance of this server) is already using port 8080, the server will fail to start.

## The Solution

The `bugSolution.js` file shows how to improve the error handling.  It checks if the port is in use before starting the server, and provides a more user-friendly error message.