/* 1. Click only visible buttons

for (const btn of buttons) {
  if (btn.isVisible) {
    await btn.click();
  }
} */

/* 2. Click only enabled buttons
for (const el of elements) {
  if (!await el.isDisabled()) {
    await el.click();
  }
}
  */

/* 3. Click buttons based on text content
for (const btn of buttons) {
  const text = await btn.getText();
  if (text === "Expected Text") {
    await btn.click();
  }
}
  */

/* 4. Click buttons based on data attributes
for (const btn of buttons) {
  const dataValue = await btn.getAttribute("data-type");
    if (dataValue === "submit") {   
    await btn.click();
    }
}
  */

/* 5. Click until non-clickable appears
for (const el of elements) {
  if (!(await el.isEnabled())) break;
  await el.click();
}
  */

/* 6. Click with retry logic
for (const btn of buttons) {
  let attempts = 0; 
    while (attempts < 3) {
    try {
        await btn.click();  
        break;
    } catch (error) {
        attempts++;
        if (attempts === 3) {
        console.error("Failed to click after 3 attempts:", error);
        }   
    }
  } 
}  
    */
