import { useContext, useState } from 'react';
import styles from './index.module.scss';
import site from '../../data/site.json';
import Button from '../../components/button';
import Radio from '../../components/radio';
import Checkbox from '../../components/checkbox';
import Select from '../../components/select';
import Column from '../../components/column';
import { STATES } from './states';
import { postFormData } from './service';
import Header from '../../components/header';
import Section from '../../components/section';
import { Context } from '../../context';

const Donate = () => {
  const { context, updateContext } = useContext(Context);

  const donate = context.formType === 'donate';
  const request = context.formType === 'request';

  const [volunteer, toggleVolunteer] = useState(false);
  const [attempted, setAttempted] = useState(false);
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
   * Prepare the form data to be sent to server
   * @param event
   */
  const handleSubmit = () => {
    setAttempted(true);
    if (validateFields()) {
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
      postFormData(data);
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
            <form onSubmit={handleSubmit}>
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
                      change={() => {
                        updateContext({ formType: 'donate' });
                      }}
                    />
                  </li>
                  <li>
                    <Radio
                      label="I am requesting medical equipment"
                      group="type"
                      selected={request}
                      change={() => {
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
                      change={() => {
                        toggleVolunteer(!volunteer);
                      }}
                    />
                  </li>
                </ul>
              </div>
              {(donate || request) && (
                <div className={styles.block}>
                  <h3>
                    Please fill out some basic information so we can get in
                    touch.
                  </h3>
                  {request && (
                    <div className={styles.row}>
                      <span className={styles.input}>
                        <input
                          placeholder="Organization Name"
                          type="text"
                          onChange={event => {
                            setForm({ ...form, org: event.target.value });
                          }}
                        />
                      </span>
                    </div>
                  )}
                  <div className={styles.row}>
                    <div className={styles.input}>
                      <input
                        required
                        type="text"
                        placeholder="First Name"
                        autoComplete="given-name"
                        onChange={event => {
                          setForm({ ...form, first: event.target.value });
                          if (attempted) validateFields();
                        }}
                      />
                    </div>
                    <div className={styles.input}>
                      <input
                        required
                        type="text"
                        placeholder="Last Name"
                        autoComplete="family-name"
                        onChange={event => {
                          setForm({ ...form, last: event.target.value });
                          if (attempted) validateFields();
                        }}
                      />
                    </div>
                    <div className={styles.input}>
                      <input
                        required
                        type="tel"
                        autoComplete="tel"
                        pattern="^[0-9]{3,45}$"
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
                      <input
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
                      <input
                        type="text"
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
                      <input
                        type="text"
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
                        change={event => {
                          setForm({ ...form, state: event.target.value });
                        }}
                      />
                    </span>
                    <div className={styles.input}>
                      <input
                        type="text"
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
                          change={() => {
                            item.checked = !item.checked;
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                  <div className={styles.row}>
                    <span className={styles.input}>
                      <textarea
                        rows={8}
                        placeholder="Please let us know if you have other items you would like to donate."
                        onChange={event => {
                          setForm({ ...form, other: event.target.value });
                        }}
                      ></textarea>
                    </span>
                  </div>
                </div>
              )}
              {(donate || request || volunteer) && (
                <Button change={handleSubmit}>
                  {{ label: 'SUBMIT', type: 'primary' }}
                </Button>
              )}
            </form>
          </Column>
        </div>
        <Column>
          <div className={styles.formError}>
            An error occurred. Please refresh the page and try again.
          </div>
        </Column>
      </div>
    </Section>
  );
};

export default Donate;
