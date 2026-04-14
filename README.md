# 🔬 Sagar Paul — Portfolio Website

একটি minimal, clean personal portfolio। সব তথ্য একটি আলাদা ফাইলে আছে — সহজেই এডিট করা যায়।

---

## ✏️ তথ্য কীভাবে এডিট করবেন

> **শুধু `js/config.js` ফাইলটি খুলুন এবং সেখানে সব এডিট করুন।**
> অন্য কোনো ফাইলে হাত দিতে হবে না।

### `js/config.js` — এখানে যা যা আছে:

| Section | কী কী বদলানো যায় |
|---------|-----------------|
| `personal` | নাম, পেশা, ফোন, ইমেইল, LinkedIn, ছবি |
| `address` | গ্রাম, শহর, জেলা, রাজ্য, দেশ, পিনকোড |
| `languages` | ভাষা ও দক্ষতার মাত্রা |
| `stats` | Hero section-এর মূল পরিসংখ্যান |
| `experience` | কাজের অভিজ্ঞতা, দায়িত্ব, tags |
| `education` | ডিগ্রি, প্রতিষ্ঠান, সময়কাল |
| `skills` | দক্ষতার বিভাগ এবং শতাংশ |
| `achievements` | অর্জনের সংখ্যা ও বিবরণ |
| `strengths` | ব্যক্তিগত গুণাবলী |
| `settings` | ছবি দেখানো/লুকানো, ম্যাপ, form ইত্যাদি |

---

## 📸 ছবি যোগ করতে চাইলে

1. `images/` ফোল্ডারে আপনার ছবি রাখুন
2. `js/config.js` খুলুন
3. এই লাইনগুলো বদলান:
   ```js
   photo:     "images/আপনার-ছবির-নাম.jpg",
   showPhoto: true,
   ```

---

## 🗺️ ম্যাপ বন্ধ/চালু করতে

```js
settings: {
  showMap: false,   // ম্যাপ বন্ধ
  showMap: true,    // ম্যাপ চালু
}
```

---

## ✅ যা যা আছে

- Hero — নাম, পেশা, typing animation, stats
- About — ব্যক্তিগত তথ্য, ভাষা
- Skills — animated skill bars
- Experience — কাজের অভিজ্ঞতা timeline
- Education — শিক্ষাগত যোগ্যতার কার্ড
- Achievements — মূল অর্জন
- Strengths — ব্যক্তিগত গুণ
- Contact — form + phone/email/address
- Responsive (mobile/tablet/desktop)
- Minimal dark design

---

## 📁 File Structure

```
index.html         ← মূল পেজ (এডিট করতে হবে না)
js/
  config.js        ← ✅ সব তথ্য এখানে — শুধু এটা এডিট করুন
  main.js          ← JavaScript (এডিট করতে হবে না)
css/
  style.css        ← Design (এডিট করতে হবে না)
images/
  profile-professional.jpg  ← ছবি (বদলাতে চাইলে এখানে রাখুন)
README.md
```

---
https://sagar-web-sys.github.io/Port/ 

*© 2025 Sagar Paul. All Rights Reserved.*
