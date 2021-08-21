**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN BẮC NINH)</center>**

Hưng muốn tăng cường sức khỏe nên anh ấy tham gia tập chạy. Mỗi ngày anh ta chạy đúng ~N~ phút (vừa chạy vừa nghỉ), tại ~1~ phút bất kỳ, anh ta có thể lựa chọn là chạy hay nghỉ ngơi trong phút đó.

Khi bắt đầu chạy, độ mệt mỏi của anh ta là ~0~. Tại phút thứ ~i~ bất kỳ, nếu anh ta chọn phương án là chạy thì anh ấy chạy được ~d_i~ mét và độ mệt mỏi sẽ tăng lên ~1~, tuy nhiên độ mệt mỏi không được tăng quá ~M~, nếu anh ta chọn nghỉ ngơi thì độ mệt mỏi giảm đi ~1~ (Nếu độ mệt mỏi bằng không thì anh ta có nghỉ cũng không giảm nữa), và anh ta không thể bắt đầu chạy lại cho đến khi độ mệt mỏi trở về ~0~.

Sau khi kết thúc ~N~ phút chạy, độ mệt mỏi của anh ấy cũng phải trở về ~0~ (nếu không anh ta sẽ không thể làm việc cả ngày hôm đó).

Hãy tìm độ dài quãng đường lớn nhất mà Hưng có thể chạy trong một ngày?

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~N~ và ~M~ được nghi cách nhau một dấu cách;
- Dòng tiếp theo ghi ~n~ số nguyên ~d_1, …, d_N~, hai số liên tiếp được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là độ dài quãng đường lớn nhất mà Hưng có thể chạy trong một ngày.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
5 3 4 2 10
```

#### Dữ liệu ra:
```
9
```

#### Giải thích:
- Phút ~1~: chạy (~5~m), phút ~2~: nghỉ, phút ~3~: chạy (~4~m), phút ~4, 5~: nghỉ.

## Giới hạn:
- ~1 ≤ N ≤ 10^5; 1 ≤ M ≤ 500~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)