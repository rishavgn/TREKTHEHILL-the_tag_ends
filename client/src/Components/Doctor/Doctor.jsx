import axios from "axios";
import { useState } from "react";
import "./doctor.css";
import React from "react";

function Doctor() {
	const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_5NkXShDcaJNsIt",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:5000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:5000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: book.price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<div className="book_container">
				<img src="https://i2.wp.com/www.additudemag.com/wp-content/uploads/2006/12/GettyImages-1129223269.jpg?resize=1280%2C720px&ssl=1" alt="book_img" className="book_img" />
				<p className="book_name">Get Appointed</p>
				<p className="book_author">By Dr. vijay agarwal</p>
				<p className="book_price">
					Fees : <span>&#x20B9; 500</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					proceed to payment
				</button>
			</div>
		</div>
	);
}

export default Doctor;