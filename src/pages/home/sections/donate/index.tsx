import { Button } from '@miniml/alpha-components-react/button';
import { Checkbox } from '@miniml/alpha-components-react/checkbox';
import { Input } from '@miniml/alpha-components-react/input';
import { Radio } from '@miniml/alpha-components-react/radio';
import { Select } from '@miniml/alpha-components-react/select';
import { Textarea } from '@miniml/alpha-components-react/textarea';
import Column from 'components/column';
import Header from 'components/header';
import Section from 'components/section';
import { useAppContext } from 'context';
import site from 'data/site.json';
import { useState } from 'react';
import styles from './index.module.scss';
import { postFormData } from './service';
import { STATES } from './states';

const Donate = () => {
  const { context, updateContext } = useAppContext();

  const donate = context.formType === 'donate';
  const request = context.formType === 'request';

  const [volunteer, toggleVolunteer] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const [itemList] = useState(site.content.sections.need.list);
  const [form, setForm] = useState({
    org: 'N/A',
    first: '',
    last: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    other: ''
  });

  /**
   * Clean and format the list data for submission
   */
  const prepareListData = () => {
    if (itemList.length) {
      return itemList
        .filter(item => item.checked)
        .map(item => item.label)
        .join(', ');
    } else {
      return 'N/A';
    }
  };

  /**
   * Run validation on required input fields
   */
  const validateFields = () => {
    const requiredFields = document.querySelectorAll<HTMLInputElement>(
      'input[required]'
    );
    for (const field of Array.from(requiredFields)) {
      field.classList.toggle(styles.error, !field.value);
    }
    return !Array.from(requiredFields).some((field: HTMLInputElement) =>
      field.classList.contains(styles.error)
    );
  };

  /**
   * Return dynamic label for submit button
   */
  const submitButtonLabel = () => {
    if (error) {
      return 'CHECK FORM';
    } else if (submitted) {
      return 'THANK YOU';
    } else {
      return 'SUBMIT';
    }
  };

  /**
   * Prepare the form data to be sent to server
   * @param event
   */
  const handleSubmit = async () => {
    setAttempted(true);
    if (validateFields()) {
      setError(false);
      let type = '';
      if (donate && !request) {
        type = 'donation';
      } else if (!donate && request) {
        type = 'request';
      } else if (!donate && !request && volunteer) {
        type = 'volunteer';
      }
      const list = prepareListData();
      const data = {
        type,
        ...form,
        list,
        volunteer: volunteer ? 'Yes' : 'No'
      };
      try {
        await postFormData(data);
        setSubmitted(true);
        setServiceError(false);
      } catch (error) {
        setServiceError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <Section>
      <div id="donate" className={styles.donate}>
        <Column>
          <Header>{site.content.sections.donate.header}</Header>
          <p>{site.content.sections.donate.paragraph}</p>
        </Column>
        <div className={styles.formContainer}>
          <Column>
            <form
              onSubmit={handleSubmit}
              className={submitted ? styles.disabled : undefined}
            >
              <div className={styles.block}>
                <h3>
                  Are you donating medical equipment, or are you requesting it?
                </h3>
                <ul className={`${styles.list} ${styles.controls}`}>
                  <li>
                    <Radio
                      label="I have equipment to donate"
                      group="type"
                      selected={donate}
                      onChange={() => {
                        updateContext({ formType: 'donate' });
                      }}
                    />
                  </li>
                  <li>
                    <Radio
                      label="I am requesting medical equipment"
                      group="type"
                      selected={request}
                      onChange={() => {
                        updateContext({ formType: 'request' });
                      }}
                    />
                  </li>
                </ul>
              </div>
              <div className={styles.block}>
                <h3>
                  Are you interested in volunteering? please check the box
                  below.
                </h3>
                <ul className={`${styles.list} ${styles.controls}`}>
                  <li>
                    <Checkbox
                      label="I am interested in being a volunteer. (if you don't have any PPEs or need any PPEs but still want to contribute in the logistics please check the box)"
                      value="volunteer"
                      onChange={() => {
                        toggleVolunteer(!volunteer);
                      }}
                    />
                  </li>
                </ul>
              </div>
              {(donate || request || volunteer) && (
                <div className={styles.block}>
                  <h3>
                    Please fill out some basic information so we can get in
                    touch.
                  </h3>
                  {request && (
                    <div className={styles.row}>
                      <div className={styles.input}>
                        <Input
                          placeholder="Organization Name"
                          onChange={event => {
                            setForm({ ...form, org: event.target.value });
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div className={styles.row}>
                    <div className={styles.input}>
                      <Input
                        required
                        placeholder="First Name"
                        autoComplete="given-name"
                        onChange={event => {
                          setForm({ ...form, first: event.target.value });
                          if (attempted) validateFields();
                        }}
                      />
                    </div>
                    <div className={styles.input}>
                      <Input
                        required
                        placeholder="Last Name"
                        autoComplete="family-name"
                        onChange={event => {
                          setForm({ ...form, last: event.target.value });
                          if (attempted) validateFields();
                        }}
                      />
                    </div>
                    <div className={styles.input}>
                      <Input
                        required
                        type="tel"
                        pattern="^[0-9]{3,45}$"
                        autoComplete="tel"
                        placeholder="Phone Number"
                        onChange={event => {
                          setForm({ ...form, phone: event.target.value });
                          if (attempted) validateFields();
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.input}>
                      <Input
                        required
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={event => {
                          setForm({ ...form, email: event.target.value });
                          if (attempted) validateFields();
                        }}
                      />
                    </div>
                    <div className={styles.input}>
                      <Input
                        placeholder="Street Address"
                        autoComplete="street-address"
                        onChange={event => {
                          setForm({ ...form, street: event.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.input}>
                      <Input
                        placeholder="City"
                        autoComplete="address-level2"
                        onChange={event => {
                          setForm({ ...form, city: event.target.value });
                        }}
                      />
                    </div>
                    <span className={styles.input}>
                      <Select
                        options={STATES}
                        autoComplete="address-level1"
                        name="state"
                        label="State"
                        onChange={(
                          event: React.ChangeEvent<HTMLSelectElement>
                        ) => {
                          setForm({ ...form, state: event.target.value });
                        }}
                      />
                    </span>
                    <div className={styles.input}>
                      <Input
                        placeholder="Zip Code"
                        autoComplete="postal-code"
                        onChange={event => {
                          setForm({ ...form, zip: event.target.value });
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
              {(donate || request) && (
                <div className={styles.block}>
                  <h3>
                    Please check the boxes indicating what items you are
                    {request && ' requesting.'}
                    {donate && ' donating.'}
                  </h3>
                  <ul className={styles.list}>
                    {itemList.map((item, index) => (
                      <li key={index}>
                        <Checkbox
                          label={item.label}
                          value={item.label}
                          onChange={() => {
                            item.checked = !item.checked;
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                  <div className={styles.row}>
                    <span className={styles.input}>
                      <Textarea
                        rows={8}
                        placeholder="Please let us know if you have other items you would like to donate."
                        onChange={event => {
                          setForm({ ...form, other: event.target.value });
                        }}
                      />
                    </span>
                  </div>
                </div>
              )}
              {(donate || request || volunteer) && (
                <Button
                  onClick={handleSubmit}
                  disabled={submitted}
                  variant="primary"
                  size="large"
                >
                  {submitButtonLabel()}
                </Button>
              )}
            </form>
          </Column>
        </div>
        {serviceError && (
          <div className={styles.formError}>
            <Column>
              An error occurred. Please refresh the page and try again.
            </Column>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Donate;
