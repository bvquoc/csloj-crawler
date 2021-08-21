**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Tại Hải Phòng T11/2020</center>**

Vườn thượng uyển của nhà vua là một hình chữ nhật kích thước ~𝑚 × 𝑛~ được chia thành lưới ô vuông đơn vị, các hàng được đánh số từ ~1~ tới ~𝑚~ từ trên xuống và các cột của bảng được đánh số từ ~1~ tới ~𝑛~ từ trái qua phải. Ô nằm trên giao của hàng ~𝑖~ và cột ~𝑗~, được gọi là ô ~(𝑖, 𝑗)~, có độ cao là ~𝑎_{𝑖𝑗}~.

Nhà vua muốn xây dựng một khu nghỉ dưỡng là một hình chữ nhật kích thước ~𝑝 × 𝑞~ nằm trong giao giữa ~𝑝~ hàng liên tiếp của vườn với ~𝑞~ cột liên tiếp của vườn. Trong khu nghỉ dưỡng đó, ô có độ cao bằng trung vị trong các độ cao (của các ô của khu nghỉ dưỡng) được chọn làm phòng ngủ. Tể tướng nói rằng phải chọn ô như vậy làm phòng ngủ mới hợp phong thủy và độ cao của ô được chọn làm phòng ngủ phải bằng ~𝐵~ mới là tốt.

Khái niệm trung vị định nghĩa như sau: Sắp xếp các độ cao của các ô trong khu nghỉ dưỡng theo thứ tự tăng dần 
để được dãy ~ℎ[1] ≤ ℎ[2] ≤ ⋯ ≤ ℎ[𝑝𝑞]~. Giá trị đứng giữa dãy ~ℎ[⌊\frac{𝑝𝑞+1}{2}⌋]~ được gọi là trung vị trong các độ cao.

**Yêu cầu:** Cho biết có bao nhiêu vị trí đặt khu nghỉ dưỡng để phòng ngủ có độ cao bằng ~𝐵~.

## Dữ liệu vào:
- Dòng đầu chứa bốn số nguyên dương ~𝑚, 𝑛, 𝑝, 𝑞 (𝑚, 𝑛 ≤ 1000; 𝑝 ≤ 𝑚; 𝑞 ≤ 𝑛)~;
- Dòng thứ hai chứa số nguyên dương ~𝐵 ≤ 10^9~;
- ~𝑚~ dòng tiếp theo, dòng thứ ~𝑖~ chứa ~𝑛~ số nguyên dương, số thứ ~𝑗~ là ~𝑎_{𝑖𝑗} ≤ 10^6~.

Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số vị trí đặt khu nghỉ dưỡng để độ cao của phòng ngủ bằng ~B~.

## Ví dụ:
#### Dữ liệu vào:
```
4 4 3 3
1
1 1 2 2
1 1 2 2
1 1 2 2
1 1 2 2
```

#### Dữ liệu ra:
```
2
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)