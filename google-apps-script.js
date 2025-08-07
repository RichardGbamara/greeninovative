// Google Apps Script Code
// Copy this code to your Google Apps Script project

// Test function to verify the script is working
function testFunction() {
  console.log('Google Apps Script is working!');
  return 'Success';
}

// Handle GET requests (for testing)
function doGet(e) {
  console.log('GET request received');
  return ContentService
    .createTextOutput('Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    // Debug: Log the entire event object
    console.log('Event object:', e);
    console.log('Event type:', typeof e);
    
    // Check if we have any data at all
    if (!e) {
      throw new Error('No event object received');
    }
    
    let data;
    
    // Try to parse as form data first
    if (e.parameter && Object.keys(e.parameter).length > 0) {
      console.log('Using form parameters:', e.parameter);
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      // Try to parse as JSON
      try {
        console.log('Received request with content type:', e.postData.type);
        console.log('Raw post data:', e.postData.contents);
        console.log('Attempting to parse as JSON');
        data = JSON.parse(e.postData.contents);
        console.log('Parsed JSON data:', data);
      } catch (jsonError) {
        console.error('Failed to parse as JSON:', jsonError);
        throw new Error('Could not parse request data as form parameters or JSON');
      }
    } else {
      console.log('No data found in request');
      console.log('Available properties:', Object.keys(e));
      throw new Error('No data found in request');
    }
    
    // Get the active spreadsheet with your actual Sheet ID
    const spreadsheet = SpreadsheetApp.openById('1gINVn2hnD-CXKdV9_oPe1dlhA8S_vAzKTZPgtV1EwlQ');
    const sheet = spreadsheet.getSheets()[0]; // Use the first sheet instead of looking for specific name
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.phoneNumber || '',
      data.emailAddress || '',
      data.preferredContact || '',
      data.company || '',
      data.role || '',
      data.department || '',
      data.branch || '',
      data.propertyLocation || '',
      data.propertyOwnership || '',
      data.propertyType || '',
      data.monthlyBill || '',
      data.frequentOutages || '',
      data.solarReasons || '',
      data.solutionInterest || '',
      data.paymentOption || '',
      data.installationTimeline || '',
      data.specialRequirements || '',
      data.consent || 'true'
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Log for debugging
    console.log('Data saved successfully:', rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    console.error('Error saving data:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight OPTIONS requests for CORS
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Function to set up headers in your spreadsheet
function setupHeaders() {
  const spreadsheet = SpreadsheetApp.openById('1gINVn2hnD-CXKdV9_oPe1dlhA8S_vAzKTZPgtV1EwlQ');
  const sheet = spreadsheet.getSheets()[0]; // Use the first sheet
  
  const headers = [
    'Timestamp',
    'First Name',
    'Last Name',
    'Phone Number',
    'Email Address',
    'Preferred Contact',
    'Company',
    'Role',
    'Department',
    'Branch',
    'Property Location',
    'Property Ownership',
    'Property Type',
    'Monthly Bill',
    'Frequent Outages',
    'Solar Reasons',
    'Solution Interest',
    'Payment Option',
    'Installation Timeline',
    'Special Requirements',
    'Consent'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
} 