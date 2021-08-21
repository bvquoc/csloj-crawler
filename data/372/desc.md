Ở cổng trường THPT Chuyên Sơn La mới được lắp mới một máy rút tiền tự động. Trong máy có ~n~ loại tiền mệnh giá lần lượt là ~a_1, a_2, …, a_n~, mỗi mệnh giá có số lượng đủ nhiều.

Khi khách hàng có yêu cầu rút số tiền ~M~, chương trình điều khiển sẽ xác định xem có thể trả được số tiền đúng bằng ~M~ không, nếu có, chương trình điều khiển sẽ chọn cách trả với số lượng tờ ít nhất.

**Yêu cầu:** Hãy tính số lượng tờ tiền ít nhất để trả số tiền ~M~.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~n~ và ~M~;
- Dòng thứ hai chứa ~n~ số nguyên dương ~a_1, a_2, …, a_n~ được sắp xếp theo thứ tự tăng dần.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi ra một dòng duy nhất chứa số nguyên dương là số lượng tờ tiền ít nhất nếu có phương án trả, ngược lại ghi ra ~-1~.

## Ví dụ:
#### Dữ liệu vào:
```
3 130
10 60 100
```

## Dữ liệu ra:
```
3
```

#### Giải thích:
- Trả hai tờ ~60~ và một tờ ~10~

## Giới hạn:
- ~1 ≤ n ≤ 20; 1 ≤ a_i ≤ 10^4; 1 ≤ M ≤ 10^5~ 
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)