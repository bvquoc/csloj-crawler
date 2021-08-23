**<center>NGUỒN: PreVNOI Ⅲ (NINH BÌNH 2013)</center>**
<br>
 
Các thương nhân kinh doanh đồ trang sức tại các địa điểm dọc nước ta từ Bắc xuống Nam. Trong đó, các địa điểm buôn bán được đánh số từ $1$ đến $n$ dọc theo nước ta. Tùy thuộc vào nhu cầu mua mà giá của các đồ trang sức thay đổi theo từng ngày. Qua thống kê, người ta biết hiện có $m$ loại đồ trang sức khác nhau được bán trong các ngày vừa qua, trong đó loại thứ $i$ được biết với các thông tin như sau:

- Ngày đầu tiên, đồ trang sức $i$ được bán từ địa điểm $𝑠_𝑖$
- Ngày cuối cùng, đồ trang sức $i$ sẽ được bán đến địa điểm $𝑒_𝑖\ (1 ≤ 𝑠_𝑖 ≤ 𝑒_𝑖 ≤ 𝑛)$

Mỗi ngày thương nhân sẽ chuyển địa điểm bán sang địa điểm kế tiếp theo hướng xuống dưới phía Nam. 
Như vậy, các địa điểm bán đồ trang sức $i$ sẽ là: $𝑠_𝑖, 𝑠_𝑖 + 1, … , 𝑒_𝑖 − 1, 𝑒_𝑖$
- Ngày đầu tại vị trí $𝑠_𝑖$, giá chào bán của nó là $𝑣_𝑖\ (1 ≤ 𝑣_𝑖 ≤ 10^9)$ 
- Mỗi ngày giá loại trang sức $i$ sẽ cộng thêm một lượng là $𝑑_𝑖\ (|𝑑_𝑖| ≤ 10^9)$. Tức là, giá tại địa điểm $s_𝑖$ là $𝑣_𝑖$, giá tại $𝑠_𝑖 + 1$ là $𝑣_𝑖 + 𝑑_𝑖$,…, giá tại $𝑒_𝑖$ là $𝑣_𝑖 + (𝑒_𝑖 − 𝑠_𝑖) \times 𝑑_𝑖$. 

KHUONGND là một nhà thống kê thị trường và anh ta muốn nhờ bạn cho biết giá đồ trang sức cao nhất được bán tại tất cả các địa điểm dựa vào thông tin của các đồ trang sức đã biết. 

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $𝑛, 𝑚 ≤ 2.10^5$ 
- $m$ dòng tiếp theo, dòng thứ $i$ chứa bốn số nguyên dương $𝑠_𝑖, 𝑒_𝑖, 𝑣_𝑖$ và $𝑑_𝑖$ lần lượt thể hiện thông tin của loại đồ trang sức lần lượt là vị trí bán ban đầu $𝑠_𝑖$, vị trí bán kết thúc $𝑒_𝑖$, giá chào bán ban đầu $𝑣_𝑖$ và lượng giá bán thay đổi $𝑑_𝑖$ theo mỗi ngày. Dữ liệu vào đảm bảo giá bán các loại đồ trang sức luôn dương. 
Các số trên một dòng của được ghi cách nhau bởi dấu cách

## Dữ liệu ra:
- Ghi ra $n$ dòng, dòng thứ $i$ ghi một số nguyên duy nhất là giá đồ trang sức đắt nhất bán tại vị trí $i$, nếu tại ví trí $i$ không có đồ trang sức nào được bán thì dòng $i$ ghi số $0$

## Ví dụ:
### Dữ liệu vào: 
```
6 4 
4 4 3 1 
1 2 5 1 
5 6 1 1 
6 6 1 1 5
```

### Dữ liệu ra:
```
5
6
0
3
1
2
```

## Giới hạn:
- $30\%$ số điểm ứng với các test có $𝑛 × 𝑚 ≤ 5000^2$