<center><img src="/images/problems/377/CAKESTACK.png" width=500px></center>

Sau thời gian dài chờ đợi, cuối cùng thì các nồi bánh Chưng của các lớp đã luộc xong. Giờ là đến công đoạn chuyển bánh về xếp gọn lại tại một khu vực.

Có ~n~ lớp tham gia gói bánh. Tất cả bánh sau khi luộc xong đang được xếp trên một đường thẳng (mà ta coi như một trục tọa độ), lớp thứ ~i~ có ~a_i~ cái và đang xếp ở tọa độ nguyên ~x_i~ (như vậy có tất cả ~m = a_1 + a_2 + ... + a_n~ cái bánh). Nhà trường muốn chuyển tất cả ~m~ cái bánh này về xếp thành một đoạn liên tiếp nhau, mỗi cái ở một điểm có tọa độ nguyên. Chi phí vận chuyển một cái bánh từ tọa độ ~x~ đến tọa độ ~x’~ là ~|x – x’|~.

**Yêu cầu:** Hãy giúp nhà trường tính toán chi phí tối thiểu để di chuyển tất cả ~m~ cái bánh.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n~;
- ~n~ dòng tiếp theo, dong thứ ~i~ chứa hai số nguyên ~a_i~ và ~x_i~.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là chi phí tối thiểu để di chuyển tất cả ~m~ cái bánh.

## Ví dụ:
#### Dữ liệu vào:
```
2
2 1
1 3
```

#### Dữ liệu ra:
```
1
```

#### Giải thích:
- Ta chuyển một cái bánh từ tọa độ ~1~ sang tọa độ ~2~ mất chi phí là ~|2 – 1| = 1~. Lúc này ~3~ cái bánh được xếp trên các tọa độ ~1, 2, 3~.

## Giới hạn:
Trong tất cả các test: ~1 ≤ n, a_i ≤ 10^5; m ≤ 10^6; |x_i| ≤ 10^9, i = 1, 2, …, n~. Trong đó:
- **Subtask** ~\#1:~ ~30\%~ số test ứng với ~30\%~ số điểm có ~n ≤ 100; m ≤ 1000; |x_i| <= 1000~
- **Subtask** ~\#2:~ ~30\%~ số test khác ứng với ~30\%~ số điểm có ~n ≤ 100; m ≤ 1000~
- **Subtask** ~\#3:~ ~20\%~ số test khác ứng với ~20\%~ số điểm có ~n ≤ 10^5; a_i = 1~ với ~i = 1, 2, …, n~
- **Subtask** ~\#4:~ ~20\%~ số test còn lại ứng với ~20\%~ số điểm không có ràng buộc gì thêm.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)