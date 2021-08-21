Hiện nay, với sự bùng nổ của công nghệ thông tin, mỗi cá nhân đều có cho mình một số tài khoản (tài khoản facebook, tài khoản e-mail, tài khoản twitter…). Các tài khoản này đều cần được bảo vệ bằng các mật khẩu. Một vấn đề quan trọng là cần chọn được các mật khẩu “an toàn” để tránh bị đánh cắp tài khoản.

Giả sử mỗi mật khẩu là một chuỗi ký tự khác rỗng chỉ gồm các chữ cái la-tinh in hoa (`A`…`Z`), in thường (`a`…`z`) và chữ số (`0`..`9`). Ta đánh giá độ “an toàn” của mật khẩu bởi hai tiêu chí:
- Độ dài (số ký tự): là một số nguyên trong phạm vi từ ~0..5~: Nếu mật khẩu có độ dài là m thì độ an toàn là: ~\min(5, \max(m – 5, 0))~
- Loại ký tự (hoa, thường, số):
    - Nếu chỉ có một loại ký tự: ~1~
    - Có đúng hai loại ký tự: ~2~
    - Có đủ ~3~ loại ký tự: ~5~

Độ an toàn của mật khẩu là tổng của hai tiêu chí trên.

**Ví dụ:** mật khẩu là `Abcd123456` có độ an toàn là: ~5~ (độ dài) + ~5~ (loại ký tự) = ~10~.

Bạn được cho một danh sách các mật khẩu, hãy viết chương trình để đánh giá “độ an toàn” của các mật khẩu đó.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n~ là số mật khẩu cần đánh giá.
- ~n~ dòng tiếp theo, mỗi dòng chứa một mật khẩu là xâu ký tự khác rỗng, chỉ chứa các ký tự la-tinh in hoa (`A`…`Z`), in thường (`a`…`z`) và chữ số (`0`..`9`), độ dài không quá ~15~ ký tự.

## Dữ liệu ra:
Ghi trên một dòng ~n~ số nguyên là độ an toàn của ~n~ mật khẩu (theo đúng thứ tự), hai số liên tiếp ghi cách nhau một dấu cách.

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
5 4 2 10
```

## Giới hạn:
- ~1 ≤ n ≤ 100~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)