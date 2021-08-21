**<center>NGUỒN: Contest CSL 2017-2018 Lần 2 (Tháng 1/2018) Day 2</center>**
<br>

Steve rất thích đóng gói quà tặng các bạn của mình dưới dạng hình hộp chữ nhật.  Steve cũng nhận thấy rằng bao bì càng đẹp bao nhiêu thì niềm vui mang tới cho bạn bè càng lớn bấy nhiêu. Trong các loại giấy gói Steve thích dùng nhất loại giấy kẻ ca rô. Sau khi mở quà, giấy gói còn có thể được dùng để chơi cờ ca rô, chơi bắn tàu chiến hay làm nháp giải các bài toán tin học.

Steve vốn tính rất cẩn thận. Khi gói bạn ấy bao giờ cũng để các đường chia lưới ô vuông của giấy gói trùng với cạnh hình hộp. Lần này Steve chuẩn bị quà cho người bạn gái của mình vừa được giải Olympic Tin học. Tờ giấy ca rô dùng để bao gói có ~n~ ô. Steve cắt giấy dọc theo các đường lưới theo cách bất kỳ tùy theo nhu cầu sử dụng và dán chúng lên bề mặt của gói quà. Chính vì vậy hình dáng ban đầu của giấy gói không đóng vai 
trò quan trọng. Với tờ giấy hiện có, Steve muốn đóng quà vào hộp có thể tích lớn mà vẫn đủ giấy ca rô để dán kín các mặt của hình hộp. Dĩ nhiên, không nhất thiết phải dùng hết các ô của tờ giấy ca rô.

**Ví dụ**, với ~n = 37~, hộp lớn nhất có thể là có kích thước ~3×2×2~ và có thể tích là ~12~.
<center><img src="/images/problems/1152/gift.svg" width=200px></center>

**Yêu cầu**: Cho số nguyên ~n\ (6 ≤ n ≤ 10^{13})~. Hãy xác định thể tích lớn nhất của hộp và kích thước của nó.

## Dữ liệu vào:
- Gồm một dòng chứa số nguyên n.

## Dữ liệu ra:
- Dòng thứ nhất chứa số nguyên ~v~ – thể tích của hộp làm được
- Dòng thứ hai chứa ~3~ số nguyên là chiều dài, chiều rộng và chiều cao của hộp. Nếu tồn tại nhiều lời giải thì đưa ra một trong số các lời giải  của bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
37
```

#### Dữ liệu ra:
```
12
3 2 2
```

## Giới hạn:
- Trong tất cả các test có ~n \le 10^{13}~
- ~30\%~ số test có ~𝑛 ≤ 5000~
- ~40\%~ số test khác có ~𝑛 ≤ 10^8~
