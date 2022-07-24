# zuxian的收藏周刊

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





## 参考

next-starter-tailwind

ts-nextjs-tailwind-starter

nextly-template

next-themes
