Hiện nay, với sự bùng nổ của công nghệ thông tin, mỗi cá nhân đều có cho mình một số tài khoản (tài khoản facebook, tài khoản e-mail, tài khoản twitter…). Các tài khoản này đều cần được bảo vệ bằng các mật khẩu. Một vấn đề quan trọng là cần có biện pháp bảo vệ các mật khẩu đó “an toàn” để tránh bị đánh cắp tài khoản.

Tèo luôn chọn cho mình những mật khẩu gồm một số chữ cái la-tinh đứng đầu (không quá ~10~ chữ cái) và đem ghép vào cuối một số nguyên dương trong hệ thập phân (không quá ~6~ chữ số). Ví dụ: `Abcd12`. Sau đó Tèo mã hóa mật khẩu bằng cách tách phần số ở cuối, giữ lại phần chữ cái ở đầu và đem chèn vào giữa các chữ cái đó (có thể cả ở đầu và ở cuối) một số chữ số từ ~0~ đến ~9~ sao cho tổng các chữ số được chèn đúng bằng số ở cuối của mật khẩu. Ví dụ: `A1b23c4d2` là một cách mã hóa của mật khẩu `Abcd12` (các chữ số được dùng để chèn là ~1 + 2 + 3 + 4 + 2 = 12~).

Bạn hãy giúp Tèo viết một chương trình giải mã mật khẩu nhé?

## Dữ liệu vào:
- Một dòng duy nhất chứa xâu ký tự mật khẩu đã mã hóa chỉ gồm các chữ cái la-tinh và chữ số.

## Dữ liệu ra:
- Ghi ra một dòng duy nhất là mật khẩu giải mã được.

## Ví dụ:
#### Dữ liệu vào:
```
A1b23c4d2
```

#### Dữ liệu ra:
```
Abcd12
```

## Giới hạn:
- Độ dài xâu mã hóa không quá ~10^5~ ký tự trong đó có chứa ít nhất một chữ cái la-tinh và ít nhất một chữ số khác ~0~.