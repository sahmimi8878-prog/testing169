
*** Settings ***
Library    SeleniumLibrary
Library    Dialogs
*** Test Cases ***
Login With Valid Credentials
    Open Browser    https://www.saucedemo.com/    chrome
    Input Text    id:user-name    standard_user
    Input Password    id:password    secret_sauce
    Click Button    id:login-button
    Page Should Contain    Products
    Pause Execution    Click OK to continue testing
    #Close Browser
    #Sleep 10s
    #Close Browser

#python --version เช็คไพทอน
#pip install robotframework
#pip install robotframework-seleniumlibrary
#สั่งรันโปรแกรม robot login.robot