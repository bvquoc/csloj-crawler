**<center>NGUỒN: Bài tập Đội Bắc Giang ôn thầy Đỗ Đức Đông - Tháng 10/2017</center>**

Đất nước Alpha có ~𝑛~ thành phố, tất cả nằm dọc theo một con đường cao tốc. Các thành phố được đánh số liên tiếp bắt đầu từ ~1~ đến ~𝑛~. Thành phố thứ ~𝑖~ có khoảng cách đến vị trí bắt đầu con đường cao tốc là ~𝑑_𝑖\ (𝑖 = 1,2, .… , 𝑛)~. Lãnh đạo đất nước muốn thành lập một trung tâm văn hóa. Nếu trung tâm được đặt ở vị trí có khoảng cách đến vị trí bắt đầu con đường cao tốc là ~𝑝~ thì tổng chi phí giao lưu đi lại được tính bằng:
~~\sum_{i=1}^𝑛 |𝑑_𝑖 − 𝑝|^𝑘~~

**Yêu cầu:** Cho các số nguyên dương ~𝑑_1, 𝑑_2, …, 𝑑_𝑛~ và số nguyên dương ~𝑘~, hãy giúp lãnh đạo đất nước lựa chọn vị trí đặt trung tâm văn hóa để tổng chi phí giao lưu đi lại là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~𝑛, 𝑘\ (𝑛 ≤ 100)~;
- Dòng thứ hai chứa ~𝑛~ số nguyên dương ~𝑑_1, 𝑑_2, …, 𝑑_𝑛\ (0 < 𝑑_𝑖 ≤ 10^8)~;

## Dữ liệu ra:
- Ghi ra một số thực là tổng chi phí giao lưu đi lại (lấy ~2~ chữ số sau dấu chấm thập phân).

## Ví dụ:
#### Dữ liệu vào:
```
3 1
1 4 2
```

#### Dữ liệu ra:
```
3.00
```

## Giới hạn:
- Subtask ~\#1: k = 1~;
- Subtask ~\#2: k = 2~.