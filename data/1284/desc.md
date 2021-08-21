**<center>Hải phòng - Ngày 06 tháng 11 năm 2020 (am)</center>**

Dọc theo con đường hội chợ (để dễ hình dung có thể mô tả chúng như trục tọa độ) có ~𝑁~ gian hàng được dựng sẵn ở các vị trí ~𝑥_1, 𝑥_2, … , 𝑥_𝑁~. Có ~𝐶~ người đăng ký bán hàng trong hội chợ. Do đang phòng chống dịch COVID-19 nên Ban tổ chức hội chợ quyết định bố trí ~𝐶~ người bán hàng, mỗi người ở một gian hàng trong số ~𝑁~ gian hàng nói trên) sao cho khoảng cách nhỏ nhất giữa hai gian hàng bất kỳ trong số ~𝐶~ gian hàng được lựa chọn là lớn nhất có thể. Viết chương trình thực hiện điều này. Ở đây khoảng cách giữa gian hàng có tọa độ ~𝑥~ và gian hàng có tọa độ ~𝑦~ được định nghĩa là ~|𝑥 − 𝑦|~.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~𝑁, 𝐶\ (2 ≤ 𝐶 ≤ 𝑁 ≤ 10^5)~ cách nhau một dấu trống;
- Tiếp theo là ~𝑁~ dòng, dòng thứ ~𝑖\ (1 ≤ 𝑖 ≤ 𝑁)~ chúa số nguyên ~𝑥_𝑖~ - vị trí của gian hàng thứ ~𝑖\ (0 ≤ 𝑥𝑖 ≤ 10^9)~.

## Dữ liệu ra:
- Một số nguyên duy nhất khoảng cách nhỏ nhất giữa hai gian hàng trong trường hợp lớn nhất.

## Ví dụ:
#### Dữ liệu vào:
```
5 3
1
2
8
4
9
```

#### Dữ liệu ra:
```
3
```