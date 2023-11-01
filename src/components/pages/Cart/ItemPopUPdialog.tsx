import React, { FC } from 'react';
import '../../../App.css';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface ItemPopUpDialogProps {
  cartItem: any; // Adjust the type as per your cart item structure
  setPopupFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormData {
  fullName: string;
  email: string;
  creditCard: string;
  expirationDate: string;
}

const ItemPopUpdialog: FC<ItemPopUpDialogProps> = (props) => {
  const { cartItem, setPopupFlag } = props;

  const handleConfirmOrder = () => {
    const orderedItems = JSON.parse(localStorage.getItem('ORDEREDITEMS') || '[]');
    orderedItems.push(cartItem);
    localStorage.setItem('ORDEREDITEMS', JSON.stringify(orderedItems));

    alert('Food order confirmed!');
    setPopupFlag(false);
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    handleConfirmOrder();
  };

  return (
    <div className="appDialog">
      <div className="window">
        <div className="header">
          <div onClick={() => setPopupFlag(false)}>X</div>
        </div>
        <div className='propop'>
          <h2>Checkout</h2>
          <form className='form1' onSubmit={handleSubmit(onSubmit)}>
            <label>
              Full Name:
              <Controller
                name="fullName"
                control={control}
                rules={{ required: 'Full Name is required' }}
                render={({ field }) => <input {...field} />}
              />
              {errors.fullName && <p>{errors.fullName.message}</p>}
            </label>

            <label>
              Email:
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => <input {...field} />}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </label>

            <label>
              Credit Card Number:
              <Controller
                name="creditCard"
                // type="number"
                control={control}
                rules={{
                  required: 'Credit Card Number is required',
                  pattern: {
                    value: /^[0-9]{16}$/,
                    message: 'Invalid credit card number (16 digits)',
                  },
                }}
                render={({ field }) => <input {...field} />}
              />
              {errors.creditCard && <p>{errors.creditCard.message}</p>}
            </label>

            <label>
              Expiration Date:
              <Controller
                name="expirationDate"
                // type="number"
                control={control}
                rules={{
                  required: 'Expiration Date is required',
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                    message: 'Invalid expiration date (MM/YY)',
                  },
                }}
                render={({ field }) => <input {...field} />}
              />
              {errors.expirationDate && <p>{errors.expirationDate.message}</p>}
            </label>

            <button type="submit">Confirm Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ItemPopUpdialog;
