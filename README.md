# fuzuxian的收藏周刊

# Next.js 


 <div align="center">
 <p><strong>A <a href="https://nextjs.org" target="_blank">Next.js</a> starter styled using <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.</strong></p>
 <p>Uses Tailwind CSS' <a href="https://tailwindcss.com/docs/controlling-file-size" target="_blank">built-in purge option</a> to remove unused CSS.</p>
</div>


##  增加一键换肤功能


- **next-themes与Tailwind搭配使用**


[github.com/pacocoursey/next-themes](https://github.com/pacocoursey/next-themes)

[www.tailwindcss.cn/docs/customizing-colors](https://www.tailwindcss.cn/docs/customizing-colors)

In your `tailwind.config.js`, set the dark mode property to class:

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class'
}
```

Set the attribute for your Theme Provider to class:

```js
// pages/_app.js
<ThemeProvider attribute="class">
```

If you're using the `value` prop to specify different attribute values, make sure your dark theme explicitly uses the "dark" value, as required by Tailwind.

That's it! Now you can use dark-mode specific classes:

```js
<h1 className="text-black dark:text-white">
```

- 不同主题肤色-使用不同的图像


```js
import Image from 'next/image'
import { useTheme } from 'next-themes'

function ThemedImage() {
  const { resolvedTheme } = useTheme()
  let src
  switch (resolvedTheme) {
    case 'light':
      src = '/tailwind-logo.svg'
      break
    case 'dark':
      src = '/tailwind-logo-black.svg'
      break
    default:
      src = '/tailwind-logo.svg'
      break
  }
  return <Image src={src} width={40} height={40} />
}

export default ThemedImage
```

## 使用react-redux8

安装 axios、react-redux、@reduxjs/toolkit、redux-logger

- 感受一下react-redux7.1之后版本的新特性--useSelector、useDispatch




- 使用@reduxjs/toolkit工具实现异步

[juejin.cn/post/7063442144916144158](https://juejin.cn/post/7063442144916144158#heading-0)




- redux-logger-打印日志






## 参考

next-starter-tailwind

ts-nextjs-tailwind-starter

nextly-template

next-themes
