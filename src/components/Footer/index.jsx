import React from 'react'
import { Link } from 'react-router-dom'

import './base.css'
import {
  Text,
  TextGroup,
  Form,
  Field,
  Button,
  Icon
} from '../../components'
import Logo from '../../img/CT ICON white.png'

const initialValues = {
  email: ''
}

function handleSubmit(values) {
  /**
   * @todo
   */
  console.log(values)
}

export function Footer() {
  return (
    <footer>
      <section className="top">
        <div className="column logo">
          <img 
            src={Logo} 
            alt="CleanTelligent logo"
            className='logo'
          />
        </div>
        <div className="column contact">
          <Text
            option
            light
          >Contact Us</Text>
          <br/>
          <Text light>460 N. University Ave.</Text>
          <Text light>Ste. #203</Text>
          <Text light>Provo, UT USA 84601</Text>
          <br/>
          <Text light>+1 801-404-5038</Text>
          <Text light>info@cleantelligent.com</Text>
        </div>
        <div className="column links">
          <Text
            option
            light
          >Links</Text>
          <br/>
          <Link to='#'>
            <Text light>About Us</Text>
          </Link>
          <Link to='#'>
            <Text light>Careers</Text>
          </Link>
          <Link to='#'>
            <Text light>Blog</Text>
          </Link>
          <Link to='#'>
            <Text light>Webinars</Text>
          </Link>
          <Link to='#'>
            <Text light>Podcasts</Text>
          </Link>
        </div>
        <div className="column support">
          <Text
            option
            light
          >Support</Text>
          <br/>
          <Link to='#'>
            <Text light>Contact Us</Text>
          </Link>
          <Link to='#'>
            <Text light>Coaching</Text>
          </Link>
          <Link to='#'>
            <Text light>On-Site Training</Text>
          </Link>
          <Link to='#'>
            <Text light>Jumpstart University</Text>
          </Link>
          <Link to='#'>
            <Text light>FAQs</Text>
          </Link>
        </div>
        <div className="column subscribe">
          <TextGroup>
            <Text
              option
              light
            >Subscribe</Text>
            <Text light body>Recieve our monthly newsletter by email.</Text>
          </TextGroup>
          <br/>
          <Form
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <Field 
              name='email'
              placeholder='Enter your email address'
            />
            <Button 
              small
              filled
              type='submit'
              label='sign up'
            />
          </Form>
        </div>
      </section>
      <section className="bottom">
        <div className="left">
          <Text
            fineprint
            light
          >&copy; CleanBrain Sotfware, Inc. All rights reserved.</Text>
          <hr/>
          <Link to='#'>
            <Text
              fineprint
              light
            >Terms and Conditions</Text>
          </Link>
          <hr/>
          <Link to='#'>
            <Text
              fineprint
              light
            >Privacy Policy</Text>
          </Link>
        </div>
        <div className="right">
          <Icon
            light
            brand
            icon='youtube'
          />
          <Icon
            light
            brand
            icon='facebook-f'
          />
          <Icon
            light
            brand
            icon='twitter'
          />
          <Icon
            light
            brand
            icon='linkedin-in'
          />
          <Icon 
            light
            brand
            icon='google-plus-g'
          />
          <Icon
            light
            brand
            icon='instagram'
          />
        </div>
      </section>
    </footer>
  )
}