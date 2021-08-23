**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 3</center>**

Bờm vừa thắng Phú ông trong một lần thách đố. Phú ông nghĩ ra một cách trả tiền thua cuộc và nói với Bờm: “Ta cho phép nhà ngươi được lựa chọn để thu hoạch lúa từ các thửa ruộng trong cánh đồng của ta, bao nhiêu tùy thích, nhưng không được thu hoạch lúa ở hai thửa có chung bờ". Biết rằng: trên bản đỏ, cảnh đồng của Phú ông có dạng một đa giác lồi $n$ đỉnh $ℜ =M_1M_2…M_n$ được chia ra làm $n-2$ thửa ruộng có dạng hình tam giác với $3$ đỉnh là ba đỉnh của đa giác lồi $ℜ$. Hai thửa ruộng được gọi là có chung bờ nếu hai tam giác tương ứng có chung cạnh. Hình vẽ minh hoạ cho thấy cánh đồng của Phú ông là một đa giác $6$ đỉnh được chia ra làm $4$ thửa ruộng (tam giác). Ngoài ra Bờm cũng biết rằng năng suất lúa ở các thửa ruộng trên cánh đồng là như nhau. Vì vậy muốn thu hoạch được nhiều lúa nhất, Bờm cần tìm cách chọn các thứa ruộng trong cánh đồng với tổng diện tích là lớn nhất.
<center><img src="/images/problems/1236/SMAX.png" width="500px" /></center>

**Yêu cầu:** Hãy giúp Bờm tìm cách chọn các thửa ruộng trong cánh đồng của Phú ông sao cho tổng điện tích của các thửa ruộng được chọn là lớn nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n\ (n≤ 500)$;
- Dòng thứ $i$ trong số $n$ dòng tiếp theo chứa hai số nguyên $x_i, y_i$ là tọa độ của đỉnh $M_i$ của đa giác lồi $ℜ,\ (|x_i|, |y_i|≤10000)$;
- Dòng thứ $j$ trong số $n-3$ chứa hai chỉ số của hai đỉnh của đa giác là hai đầu mút của đường chéo (bờ của thửa rộng) phân chia đa giác (cánh đồng) thành $n-2$ tam giác (thửa ruộng)$.

Hai số liên tiếp trên cùng một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
Ghi ra số thực $S$ với $3$ chữ số sau dấu phẩy là tổng diện tích lớn nhất của các thửa ruộng mà Bờm chọn.

## Ví dụ:
### Dữ liệu vào:
```
6
5 11
9 10
12 7
9 4
5 3
3 7
1 3
3 5
1 5
```

### Dữ liệu ra:
```
28.000
```