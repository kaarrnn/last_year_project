

import smtplib

Email_address = "kataria022@gmail.com"
Email_password = "happinewyear22798"


with smtplib.SMTP('smtp.gmail.com',587) as smtp:
	smtp.ehlo()
	smtp.starttls()
	smtp.ehlo()

	smtp.login(Email_address,Email_password)

	subject = "First Email"
	body = "This is my first email sending using python."

	msg = f'subject:{subject}\n\n\n {body}'	

	smtp.sendmail(Email_address,'karan.160410107038@gmail.com',msg)
