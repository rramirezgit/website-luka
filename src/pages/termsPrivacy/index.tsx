import { Box, List, Typography } from '@mui/material'
import Footer from 'components/footer'
import Nav from 'components/nav'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PrivacyListItem from './PrivacyListItem'
import styles from './termsprivacy.module.css'
import {
  actions,
  businessCategories,
  restrictedActivities
} from './termsPrivacyArray'

const TermsPrivacy = (): JSX.Element => {
  const location = useLocation().pathname
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <Box
      sx={{
        overflowX: 'hidden'
      }}
    >
      <Nav ButtonColor="primary" ButtonVariant="contained" />
      <Box className={styles.container}>
        <Box
          className={styles.content}
          sx={{
            padding: {
              xs: '35px',
              md: '75px'
            }
          }}
        >
          <Typography
            className={styles.title}
            sx={{
              fontSize: {
                xs: '30px !important',
                md: '45px !important'
              }
            }}
          >
            Acceptable Use Policy, Restricted Activities and Privacy policy
          </Typography>
          <Typography className={styles.text}>
            By accessing or using the processing services (the &quot;Processing
            Services&quot;) provided by Lukapay Holdings INC all related
            companies and subsidiaries, (hereinafter &quot;Luka&quot;,
            &quot;we,&quot; &quot;us&quot; or &quot;our&quot;), you agree to
            comply with the terms and conditions of this Acceptable Use Policy,
            Restricted Activities and Privacy Policy.
          </Typography>
          <Typography className={styles.subtitle}>
            Restricted Activities.
          </Typography>
          <Typography className={styles.text}>
            You may not use the Processing Services in connection with any
            product, service, transaction or activity that:
          </Typography>
          <Box
            sx={{
              marginBottom: '20px'
            }}
          >
            <List className={styles.list}>
              {restrictedActivities.map((text, index) => (
                <PrivacyListItem text={text} key={index} />
              ))}
            </List>
          </Box>
          <Typography className={styles.subtitle}>
            Certain Business Categories.
          </Typography>
          <Typography className={styles.text}>
            You may not use the Processing Services in connection with any
            product, service, transaction or activity that involves:
          </Typography>
          <Box
            sx={{
              marginBottom: '20px'
            }}
          >
            <List className={styles.list}>
              {businessCategories.map((text, index) => (
                <PrivacyListItem text={text} key={index} />
              ))}
            </List>
          </Box>
          <Typography className={styles.subtitle}>Actions by Us</Typography>
          <Typography className={styles.text}>
            If, in our sole discretion, we believe that you may have engaged in
            any violation of this Acceptable Use Policy, we may (with or without
            notice to you) take such actions as we deem appropriate to mitigate
            risk to Luka and any impacted third parties and to ensure compliance
            with this Acceptable Use Policy. Such actions may include, without
            limitation:
          </Typography>
          <Box
            sx={{
              marginBottom: '20px'
            }}
          >
            <List className={styles.list}>
              {actions.map((text, index) => (
                <PrivacyListItem text={text} key={index} />
              ))}
            </List>
          </Box>
          <Typography className={styles.subtitle}>
            Information Collection and Use
          </Typography>
          <Typography className={styles.text}>
            Luka collects information in several ways: : (i) when you send us an
            e-mail or communicate via any other electronic means Luka will store
            the address and the conversation history; (ii) when you use our
            services via website, payment link or gateway, Luka will collect and
            store certain personal data that may include your name, ID number
            (if applicable), phone numbers, email, limited credit card
            information (expiration date, BIN and 4 last digits), IP address,
            information about your computer or device and other standard web log
            information;
          </Typography>
          <Typography className={styles.text}>
            Luka refers to the information collected generally as “personal
            information”, which includes any information that can be used to
            identify and individual, or any anonymous information that is linked
            to a specific individual. Any information that is aggregated or
            becomes anonymous such that it cannot be reasonably associated with
            an individual shall not be considered personal information.
          </Typography>
          <Typography className={styles.text}>
            The types of personal information Luka collects and our use of that
            personal information will depend on whether you are a website user,
            merchant or end customer.
          </Typography>
          <Typography className={styles.text}>
            Luka uses the information we collect for the following general
            purposes including products and services provisioning, billing,
            identification and authentication, service improvement, contact, and
            research.
          </Typography>
          <Typography className={styles.text}>
            We may occasionally email you with information about new service.
            You may opt out of these emails by clicking on the unsubscribe link
            contained in such communications or by replying with unsubscribe in
            the subject line. Please note that you will continue to receive
            communications about your Luka account including billing invoices
            and usage notifications.
          </Typography>
          <Typography className={styles.text}>
            Luka is not allowed to disclose personal information without your
            written permission and will never sell or rent your personal
            information to marketers.
          </Typography>
          <Typography className={styles.text}>
            Certain information collected about you and your customers may be
            shared with third parties within the context of providing the
            services. These third parties may include our agents, related body
            corporates, contractors, financial institutions, payment processors,
            fraud services, and any third parties that you have directly
            authorized to receive your personal information. We may store
            personal information with third parties in locations outside our
            direct control, for example on offsite servers or databases. Some of
            the third parties to whom we disclose your personal information may
            be located outside your country of residence.
          </Typography>
          <Typography className={styles.text}>
            In certain circumstances we may be required to disclose personal
            information to government officials, law enforcement or other third
            parties: (i) in order to investigate, prevent, or take action
            regarding illegal activities, suspected fraud, situations involving
            potential threats to the physical safety of any person, violations
            of terms of use, or as otherwise required by law; (ii) if we are
            compelled to do so by subpoena, court order or other legal process;
            or (iii) if we are required to do so to comply with any law,
            statute, or set of rules or regulations.
          </Typography>
          <Typography className={styles.text}>
            We will only disclose personal information in response to a request
            if we believe in good faith that it is necessary to comply with any
            applicable law or legal requirement. We will use reasonable efforts
            to provide you prompt notice prior to such disclosure so that you
            can contest the requirement if you choose unless we determine in
            good faith that: (i) we are not permitted to provide you such notice
            under any applicable law; or (ii) giving such notice would result in
            an imminent risk of death, serious injury or significant property
            loss or damage to Luka or a third party.
          </Typography>
          <Typography className={styles.subtitle}>Data Retention</Typography>
          <Typography className={styles.text}>
            Personal information we collect and use for any purpose or purposes
            shall not be retained for longer than is necessary for that purpose
            or those purposes.
          </Typography>
          <Typography className={styles.text}>
            Luka owns the data storage, databases and all rights to the Luka
            application, but we make no claim to the rights of your data. You
            retain all rights to your data and we will never contact your
            clients directly, or use your data for our own business advantage or
            to compete with you or market to your clients.
          </Typography>
          <Typography className={styles.text}>
            To offer our service we are required to retain certain data you
            provide us to ensure transactions are processed correctly, to
            identify fraudulent activity, and to comply with applicable laws and
            regulations. Accordingly, even if you terminate the service
            agreement with Luka, will retain certain information as necessary to
            meet these obligations.
          </Typography>
          <Typography className={styles.subtitle}>Amendments</Typography>
          <Typography className={styles.text}>
            This Acceptable Use Policy may be amended by Luka at any time by
            posting a new version of it to our website or otherwise delivery a
            copy to you via previously authorized communications or notice
            methods. By accessing or using the Processing Services after a new
            version is posted or made available to you, you agree to all
            amendments reflected therein. Entire Agreement
          </Typography>
          <Typography className={styles.text}>
            These terms and conditions and all policies and procedures that are
            incorporated herein by reference constitute the entire agreement
            between you and Luka with respect to the provision of the Service.
            In the event of a conflict between this Agreement and any other Luka
            agreement or policy, these policies shall prevail on the subject
            matter of this policies unless such other agreement expressly states
            otherwise. Except as expressly provided in these policies, these
            terms describe the entire liability of Luka and sets forth your
            exclusive remedies with respect to the service and your access and
            use of the service. If any provision of this policies (or portion
            thereof) is held to be invalid or unenforceable under applicable
            law, then it shall be changed and interpreted to accomplish the
            objectives of such provision to the greatest extent possible under
            applicable law, and the remaining provisions will continue in full
            force and effect.
          </Typography>
          <Typography className={styles.subtitle}>
            Questions and Complaints
          </Typography>
          <Typography className={styles.text}>
            If you have any questions about these policies or would like to
            access or seek correction of your personal information, or if you
            have any complaints regarding our privacy practices, please contact
            us at support@lukapay.io
          </Typography>
          <Typography className={styles.text}>
            Where the processing of your Personal Data is based on your
            previously given consent, you have the right to withdraw your
            consent at any time. You may also have the right to object to the
            processing of your Personal Data on grounds relating to your
            particular situation.
          </Typography>
          <Typography className={styles.text}>
            For your protection, we may need to verify your identity before
            responding to your request, such as verifying that the email address
            from which you send the request matches your email address that we
            have on file. If we no longer need to process Personal Data about
            you in order to provide our services or our sites, we will not
            maintain, acquire or process additional information in order to
            identify you for the purpose of responding to your request.
          </Typography>
          <Typography className={styles.text}>
            If you are a Customer of a Luka Customer, please direct your
            requests directly to them. For example, if you are making, or have
            made, a purchase from a merchant using Luka, and you have a request
            that is related to the payment information that you provided as part
            of the purchase transaction, then you should address your request
            directly to the merchant.
          </Typography>
          <Typography className={styles.text}>
            This Privacy Policy was last updated in October 2022. As our service
            continues to evolve, we may update these policies so please check
            back frequently.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '160px',
          padding: '0 35px',
          paddingBottom: '50px'
        }}
      >
        <Footer />
      </Box>
    </Box>
  )
}

export default TermsPrivacy
