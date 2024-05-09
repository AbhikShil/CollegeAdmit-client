var company_logo = {
    w: 80,
    h: 50
  };
  var comapnyJSON={
    CompanyName:'NODON Technologies',
    CompanyState:'KARNATAKA',
    CompanyAddressLine1:'SCION NEST',
    CompanyAddressLine2:'INDRANAGAR',
    CompanyAddressLine3:'BANGALORE',
    PIN: '560064',
    companyEmail:'xyz@gmail.com',
    companyPhno:'+917892542208',
  };
  var fontSizes={
    HeadTitleFontSize:18,
    Head2TitleFontSize:16,
    TitleFontSize:14,
    SubTitleFontSize:12,
    NormalFontSize:10,
    SmallFontSize:8
  };
  var lineSpacing={
    NormalSpacing:12,
  };
  function generatePDF(){
    var doc = new jsPDF('p', 'pt');
    var rightStartCol1=400;
    var rightStartCol2=480;
    var InitialstartX=40;
    var startX=40;
    var InitialstartY=50;
    var startY=0;
    var lineHeights=12;
    doc.setFontSize(fontSizes.SubTitleFontSize);
    doc.setFont("helvetica");
    doc.setFontType('bold');
    doc.addImage(imgData,'JPEG',startX,startY+=50,company_logo.w,company_logo.h);
    doc.text(comapnyJSON.CompanyName,startX, startY+=15+company_logo.h,'left');
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('bold');
    doc.text("STATE", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.CompanyState, 80, startY);
    doc.setFontType('bold');
    doc.text("PIN", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.PIN, 80, startY);
    doc.setFontType('bold');
    doc.text("EMAIL",startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.companyEmail, 80, startY);
    doc.setFontType('bold');
    doc.text("Phone: ", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(comapnyJSON.companyPhno, 80, startY);
    var tempY=InitialstartY;
    doc.setFontType('bold');
    doc.text("Payment ID: ",rightStartCol1,tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.InvoiceNo, rightStartCol2, tempY);
    doc.setFontType('bold');
    doc.text("Payment Date: ",  rightStartCol1, tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.InvoiceDate,rightStartCol2, tempY);
    doc.setFontType('bold');
    doc.text("Order Status: ",rightStartCol1,tempY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.RefNo, rightStartCol2, tempY);
    doc.setFontType('normal');
    doc.setLineWidth(1);
    doc.line(20, startY+lineSpacing.NormalSpacing, 220, startY+lineSpacing.NormalSpacing);
    doc.line(380, startY+lineSpacing.NormalSpacing, 580, startY+lineSpacing.NormalSpacing);
    doc.setFontSize(fontSizes.Head2TitleFontSize);
    doc.setFontType('bold');
    doc.text("Student Information:",startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.text(customer_BillingInfoJSON.CustomerName, startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('bold');
    doc.text("Address", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerAddressLine1, 80, startY);
    doc.text(customer_BillingInfoJSON.CustomerAddressLine2, 80, startY+=lineSpacing.NormalSpacing);
    doc.text(customer_BillingInfoJSON.CustomerAddressLine3, 80,startY+=lineSpacing.NormalSpacing);
    doc.setFontType('bold');
    doc.text("STATE", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerState, 80, startY);
    doc.setFontType('bold');
    doc.text("PIN", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.PIN, 80, startY);
    doc.setFontType('bold');
    doc.text("EMAIL", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerEmail, 80, startY);
    doc.setFontType('bold');
    doc.text("Phone: ", startX, startY+=lineSpacing.NormalSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerPhno, 80, startY);
    doc.setFontSize(8);
    doc.setFontStyle('normal');
    var options = {
        beforePageContent: header,
        margin: {
          top: 50 
        },
        styles: {
          overflow: 'linebreak',
          fontSize: 8,
          rowHeight: 'auto',
          columnWidth: 'wrap'
        },
        columnStyles: {
          1: {columnWidth: 'auto'},
          2: {columnWidth: 'auto'},
          3: {columnWidth: 'auto'},
          4: {columnWidth: 'auto'},
        },
        startY: startY+=50
      };
    var columns = [
        {title: "ID", dataKey: "id",width: 90},
        {title: "College Name", dataKey: "College",width: 40}, 
        {title: "Fees", dataKey: "Fees",width: 40}, 
        {title: "Seat Type", dataKey: "SeatType",width: 40}, 
    ];
    var rows = [
      {"id": 1, "College": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Fees": "10","SeatType" : "12"},
    ];
    doc.autoTable(columns, rows, options);
    //-------Invoice Footer---------------------
    var rightcol1=340;
    var rightcol2=430;
  
    startY=doc.autoTableEndPosY()+30;
    doc.setFontSize(fontSizes.NormalFontSize);
    
    doc.setFontType('bold');
    doc.text("Total Amount Paid:", rightcol1, startY+=lineSpacing.NormalSpacing);
    doc.text(invoiceJSON.SubTotalAmnt, rightcol2, startY);
    doc.setFontType('bold');
    doc.text('For '+comapnyJSON.CompanyName+',',rightcol2, startY+=lineSpacing.NormalSpacing+25);
    doc.text('Authorised Signatory',rightcol2, startY+=lineSpacing.NormalSpacing+25);
    doc.save('NODON_ORDER_INVOICE.pdf');
  }