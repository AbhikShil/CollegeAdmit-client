import React from "react";
import { Document, Page, Text, StyleSheet,View } from "@react-pdf/renderer";
// import {
//   Table,
//   TableHeader,
//   TableCell,
//   TableBody,
//   DataTableCell,
// } from "@david.kucsai/react-pdf-table";

const Invoice = ({ order }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ {new Date().toLocaleString()} ~
      </Text>
      <Text style={styles.title}>Order Invoice</Text>
      <Text style={styles.author}>React Redux Ecommerce</Text>
      <Text style={styles.subtitle}>Order Summary</Text>

      {/* <Table>
        <TableHeader>
          <TableCell>Title</TableCell>
          <TableCell>Fees</TableCell>
          <TableCell>Seat Type</TableCell>
        </TableHeader>
      </Table>

      <Table data={order.colleges}>
        <TableBody>
          <DataTableCell getContent={(x) => x.college.title} />
          <DataTableCell getContent={(x) => `$${x.college.fees}`} />
          <DataTableCell getContent={(x) => x.college.seatType} />
        </TableBody>
      </Table> */}
      <View style={styles.table}>
        <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={styles.row1}>College Name</Text>
            <Text style={styles.row2}>Fees</Text>
            <Text style={styles.row3}>Seat Type</Text>
        </View>
        <View style={styles.row} wrap={false}>
          <Text style={styles.row1}>
            <Text style={styles.bold}>{order.colleges.college.title}</Text>
          </Text>
          <Text style={styles.row2}>{order.colleges.college.fees}</Text>
          <Text style={styles.row3}>{order.colleges.college.seatType}</Text>
        </View>
    </View>

      <Text style={styles.text}>
        <Text>
          Date: {"               "}
          {new Date(order.paymentIntent.created_at * 1000).toLocaleString()}
        </Text>
        {"\n"}
        <Text>
          Order Id: {"         "}
          {order.paymentIntent.id}
        </Text>
        {"\n"}
        <Text>
          Order Status: {"  "}
          {order.orderStatus}
        </Text>
        {"\n"}
        <Text>
          Total Paid: {"       "}
          {order.paymentIntent.amount}
        </Text>
      </Text>

      <Text style={styles.footer}> ~ Thank you for shopping with us ~ </Text>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    padding: "100px",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  table: {
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #EEE',
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    borderTop: 'none',
  },
  bold: {
    fontWeight: 'bold',
  },

  row1: {
    width: '27%',
  },
  row2: {
    width: '15%',
  },
  row3: {
    width: '15%',
  },
  row4: {
    width: '20%',
  },
  row5: {
    width: '27%',
  },
});

export default Invoice;
