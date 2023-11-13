import React from 'react'
import style from "./style.module.css"

const notification = [
  {
    "message": "Jessica and 6 others sent you new product updates. Check new orders",
    "pic": "https://templatemo.com/templates/templatemo_524_product_admin/img/notification-01.jpg",
    "time": "6m"
  },
  {
    "message": "Oliver Too and 6 others sent you exisiting product updates. Read more reports",
    "pic": "https://templatemo.com/templates/templatemo_524_product_admin/img/notification-02.jpg",
    "time": "2h"
  },
  {
    "message": "Victoria and 6 others sent you order updates. Read Order information",
    "pic": "https://templatemo.com/templates/templatemo_524_product_admin/img/notification-03.jpg",
    "time": "1d"
  },
  {
    "message": "Jessica and 6 others sent you new product updates. Check new orders",
    "pic": "https://templatemo.com/templates/templatemo_524_product_admin/img/notification-01.jpg",
    "time": "6m"
  },

  {
    "message": "Oliver Too and 6 others sent you exisiting product updates. Read more reports",
    "pic": "https://templatemo.com/templates/templatemo_524_product_admin/img/notification-02.jpg",
    "time": "2h"
  },

  {
    "message": "Victoria and 6 others sent you order updates. Read Order information",
    "pic": "https://templatemo.com/templates/templatemo_524_product_admin/img/notification-03.jpg",
    "time": "1d"
  },

]












function NotificationList() {
  return (
    <>
      <div className={style.MainNotifyWrapper}>
      <div className={style.MainHeadingNotify}> Notification List</div>
        <div className={style.NotifyWrapper}>

          {notification.map((item, index) => (

            <div key={index} className={style.descWrapper}>

              <div className={style.notifyPic}>

                <img src={item.pic} alt={'User ${index+1}'}></img>

              </div>

              <div className={style.notifyDesc}>

                <p>{item.message} </p>

                <p>{item.time} {'ago.'}</p>

              </div>

            </div>
          ))}

        </div>
      </div>


    </>
  )
}

export default NotificationList
