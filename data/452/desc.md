**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN HÙNG VƯƠNG PHÚ THỌ)</center>**

Cho hai xâu ký tự ~s~ và ~p~ chỉ chứa các ký tự la tinh thường. Hãy đếm số cách xóa đi một số ký tự của xâu ~s~ và một số ký tự của xâu ~p~ để hai xâu nhận được là khác rỗng và giống nhau (kể cả trường hợp không xóa ký tự nào). Hai cách được xem là khác nhau nếu tồn tại ít nhất một vị trí bị xóa của một trong hai xâu là khác nhau. Do số cách xóa có thể rất lớn nên ta chỉ lấy phần dư khi chia cho `1000000007`.

## Dữ liệu vào:
- Dòng đầu chứa xâu ~s~;
- Dòng hai chứa xâu ~p~.

## Dữ liệu ra:
- Một số nguyên duy nhất là phần dư của số cách xóa khi chia cho `1000000007`.

## Ví dụ:
#### Dữ liệu vào:
```
abc
aaa
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
Các cách xóa như sau:
- Cách ~1~: Xóa hai ký tự `bc` ở xâu ~s~, xóa hai ký tự `aa` cuối ở xâu ~p~
- Cách ~2~: Xóa hai ký tự `bc` ở xâu ~s~, xóa hai ký tự `aa` đầu ở xâu ~p~
- Cách ~3~: Xóa hai ký tự `bc` ở xâu ~s~, xóa ký tự đầu và ký tự cuối ở xâu ~p~

## Giới hạn:
- Các xâu ~s, p~ khác rỗng và có độ dài không quá ~2000~ ký tự.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)