import { useState } from 'react';
import styles from './index.module.scss';
import site from '../../data/site.json';
import Button from '../../components/button';
import Radio from '../../components/radio';
import Checkbox from '../../components/checkbox';
import Select from '../../components/select';
import PageColumn from '../../components/page-column';
import { STATES } from './states';
import { postFormData } from './service';

const Donate = () => {
  const [donate, toggleDonate] = useState(false);
  const [request, toggleRequest] = useState(false);
  const [volunteer, toggleVolunteer] = useState(false);
  const [itemList] = useState(site.content.sections.need.list);
  const [form, setForm] = useState({
    org: '',
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
   * Prepare the form data to be sent to server
   * @param event
   */
  const handleSubmit = (event: React.FormEvent<Element>) => {
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
    event.preventDefault();
  };

  return (
    <div id="donate" className={'section ' + styles.donate}>
      <PageColumn>
        <h2 className="header">{site.content.sections.donate.header}</h2>
        <p>{site.content.sections.donate.paragraph}</p>
      </PageColumn>
      <div className={styles.formContainer}>
        <PageColumn>
          <form id="form" onSubmit={handleSubmit}>
            <div className={styles.block}>
              <h3>
                Are you donating medical equipment, or are you requesting it?
              </h3>
              <ul className={styles.list}>
                <li>
                  <Radio
                    label="I have equipment to donate"
                    group="type"
                    change={() => {
                      toggleRequest(false);
                      toggleDonate(true);
                    }}
                  />
                </li>
                <li>
                  <Radio
                    label="I am requesting medical equipment"
                    group="type"
                    change={() => {
                      toggleRequest(true);
                      toggleDonate(false);
                    }}
                  />
                </li>
              </ul>
            </div>
            <div className={styles.block}>
              <h3>
                Are you interested in volunteering? please check the box below.
              </h3>
              <ul className={styles.list}>
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
                  Please fill out some basic information so we can get in touch.
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
              <Button>{{ label: 'SUBMIT', type: 'primary' }}</Button>
            )}
          </form>
        </PageColumn>
      </div>
      <PageColumn>
        <div className={styles.formError}>
          An error occurred. Please refresh the page and try again.
        </div>
      </PageColumn>
    </div>
  );
};

export default Donate;
