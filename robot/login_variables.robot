*** Settings ***
Library    SeleniumLibrary # ใช้ควบคุม Browser เพื่อทดสอบเว็บไซต์
Library    Dialogs # ใช้แสดงกล่องโต้ตอบ เช่น Pause Execution

*** Variables ***
${URL}         https://www.saucedemo.com/ # URL ของเว็บไซต์
${USERNAME}    standard_user # Username สำหรับ Login
${PASSWORD}    secret_sauce

*** Test Cases ***
Login Success
    # เปิดเว็บไซต์ด้วย Google Chrome
    Open Browser    ${URL}    chrome
     # กรอก Username ลงในช่องที่มี id เป็น user-name
    Input Text      id:user-name    ${USERNAME}
    # Input Password จะไม่แสดงรหัสผ่านเป็นข้อความปกติในช่อง
    Input Password  id:password     ${PASSWORD}
    # คลิกปุ่ม Login ที่มี id เป็น login-button
    Click Button    id:login-button 
     # ตรวจสอบว่าหน้าเว็บมีข้อความ Products
    Page Should Contain    Products
    # หยุดการทดสอบชั่วคราวจนกว่าผู้ใช้จะกด OK
    Pause Execution    Click OK to continue testing
