<!--**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**-->

Một mạng lưới giao thông gồm ~𝑛~ thành phố đánh số từ ~1~ tới ~𝑛~ và ~𝑚~ con đường hai chiều đánh số từ ~1~ tới ~𝑚~. Con đường thứ ~𝑖~ nối từ thành phố ~𝑢_𝑖~ tới thành phố ~𝑣_𝑖~ và cho phép đi lại theo cả hai chiều.

Tổ chức DEA muốn ngăn chặn những vụ vận chuyển ma túy từ thành phố ~1~ tới thành phố ~𝑛~. Họ cần phân bố các nhân viên của mình trên những con đường để vây bắt bọn buôn lậu ma túy được vũ trang đầy đủ.

Theo những tính toán của mình thì để tuần tra và ngăn chặn bọn buôn ma túy đi lại trên con đường thứ ~𝑖~, DEA cần bố trí ~𝑐_𝑖~ cảnh sát trên con đường này.

**Yêu cầu:** Hãy giúp tổ chức DEA lên kế hoạch phân bố các nhân viên của mình tuần tra trên một số tuyến đường, sao cho muốn đi từ ~1~ tới ~𝑛~ chắc chắn phải đi qua ít nhất một tuyến đường được tuần tra, và số nhân viên DEA cần huy động là ít nhất có thể.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~𝑛 ≤ 10^3; 𝑚 ≤ 10^4~;
- ~𝑚~ dòng tiếp theo, dòng thứ ~𝑖~ chứa ba số nguyên dương ~𝑢_𝑖, 𝑣_𝑖, 𝑐_𝑖\ (𝑐_𝑖 ≤ 10^9)~.

## Dữ liệu ra:
- Dòng đầu ghi số nhân viên cần huy động;
- Dòng thứ hai ghi chỉ số các con đường được chọn để tuần tra.

Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Ví dụ:
<center><img src="/images/problems/1420/DEA.svg" width="250px" /></center>

#### Dữ liệu vào:
```
6 6
6 5 8
5 3 6
5 4 4
4 2 5
3 2 2
2 1 9
```

#### Dữ liệu ra:
```
6
3 5
```