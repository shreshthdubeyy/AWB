# AWB Mod-7 Tool (Chrome + Firefox)

A simple browser extension to generate and verify Air Waybill (AWB) numbers using Mod-7 logic.

---

## 🚀 Features

- Generate valid AWB numbers
- Verify AWB check digit (Mod-7)
- One-click copy
- Lightweight and fast

---

## 📦 Installation

### 🔹 Chrome

1. Go to:
   chrome://extensions/

2. Enable **Developer Mode**

3. Click **Load unpacked**

4. Select the `chrome` folder from this repo

✅ Extension is ready to use

---

### 🔹 Firefox (.xpi)

1. Open Firefox

2. Go to:
   about:addons

3. Click ⚙️ (Settings)

4. Select **Install Add-on From File**

5. Choose the file from:
   mozilla/awb-mod7-tool.xpi

✅ Extension installed

---

## 🧠 Use Case

In Air Cargo ERP systems, AWB numbers are frequently required for:

- Testing
- Validation
- UAT scenarios

Most teams still rely on Excel or manual methods, which is slow and error-prone.

This tool simplifies that process.

---

## ⚙️ Logic

AWB = 7-digit number + check digit  
Check digit = first 7 digits % 7

---

## 📌 Note

This is a simple utility built to solve a daily operational problem.
