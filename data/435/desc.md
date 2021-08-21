Những con bò muốn đi vào vũ trụ! Chúng muốn đến được quỹ đạo bằng cách xây một kiểu thang máy: một cái tháp khổng lồ làm bằng các khối chồng lên nhau. Chúng có ~K~ loại khối có thể xây tháp. Mỗi khối loại ~i~ có chiều cao ~h_i~ và có số lượng ~c_i~. Do khả năng bị phá hủy bởi các tia vũ trụ, không có phần nào của khối loại ~i~ có thể vượt qua độ cao ~a_i~.

Bạn hãy giúp những con bò xây thang máy cao nhất có thể bằng cách chồng các khối lên nhau theo luật trên.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~K~;
- ~K~ dòng tiếp theo, dòng thứ ~i~ chứa ba số nguyên ~h_i, a_i, c_i~, mỗi số cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là chiều cao lớn nhất của thang máy.

## Ví dụ:
#### Dữ liệu vào:
```
3
7 40 3
5 23 8
2 52 6
```

#### Dữ liệu ra:
```
48
```

#### Giải thích:
- Từ dưới lên: ~3~ khối loại ~2~, ~3~ khối loại ~1~, ~6~ khối loại ~3~ (nếu chồng ~4~ khối loại ~2~ và ~3~ loại ~1~ không hợp lệ vì đỉnh của khối loại ~1~ vượt quá độ cao ~40~).

## Giới hạn:
- ~1 ≤ K ≤ 400, 1 ≤ h_i ≤ 100, 1 ≤ c_i ≤ 10, 1 ≤ a_i ≤ 40000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)