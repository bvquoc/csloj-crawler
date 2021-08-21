Hiện nay, với sự bùng nổ của công nghệ thông tin, mỗi cá nhân đều có cho mình một số tài khoản (tài khoản facebook, tài khoản e-mail, tài khoản twitter…). Các tài khoản này đều cần được bảo vệ bằng các mật khẩu. Một vấn đề quan trọng là cần chọn được các mật khẩu “an toàn” để tránh bị đánh cắp tài khoản.

Giả sử mỗi mật khẩu là một chuỗi ký tự khác rỗng chỉ gồm các chữ cái la-tinh in hoa (`A`…`Z`), in thường (`a`…`z`) và chữ số (`0`..`9`). Ta gọi một chuỗi ký tự như trên là mật khẩu an toàn nếu nó có độ dài không dưới ~6~ ký tự và có đủ chữ cái in hoa, in thường và số.

**Ví dụ:** mật khẩu là `Abcd123456` là mật khẩu an toàn.

Bạn được cho một danh sách các mật khẩu, hãy viết chương trình để đánh giá xem các mật khẩu đó có phải mật khẩu an toàn không?

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n~ là số mật khẩu cần đánh giá;
- ~n~ dòng tiếp theo, mỗi dòng chứa một mật khẩu là xâu ký tự khác rỗng, chỉ chứa các ký tự la-tinh in hoa (`A`…`Z`), in thường (`a`…`z`) và chữ số (`0`..`9`), độ dài không quá ~15~ ký tự.

## Dữ liệu ra:
- Ghi ~n~ dòng, dòng thứ i là `YES` nếu mật khẩu thứ ~i~ là an toàn và là `NO` nếu mật khẩu thứ ~i~ không an toàn.

## Ví dụ:
#### Dữ liệu vào:
```
4
Password
security
A1234
Abcd123456
```

#### Dữ liệu ra:
```
NO
NO
NO
YES
```

#### Giới hạn:
- ~1 ≤ n ≤ 100~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)