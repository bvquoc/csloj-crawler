**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T11/2020</center>**

Bản đồ một trang trại hình chữ nhật kích thước ~𝑚 × 𝑛~ được chia làm lưới ô vuông đơn vị (~𝑚~ hàng, ~𝑛~ cột). Trên mỗi ô chứa một ký tự đánh dấu thuộc một trong ba loại:
- `~`: Ô chứa gà;
- `*`: Ô chứa cáo;
- `.`: Ô trống.

Người ta muốn xây rào quây một hình chữ nhật thỏa mãn:
- Hình chữ nhật có cạnh song song với cạnh trang trại và chứa trọn một số ô.
- Trong hình chữ nhật không chứa cáo;
- Số ô gà trong hình chữ nhật là nhiều nhất có thể;
- Nếu có nhiều cách xây rào thỏa mãn ba điều kiện trên, người ta muốn chọn hình chữ nhật có chu vi nhỏ nhất trong số đó (để tiết kiệm chi phí xây rào).

**Yêu cầu:** Tìm phương án xây rào.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~𝑚, 𝑛 ≤ 1000~;
- ~𝑚~ dòng tiếp theo, dòng ~𝑖~ chứa ~𝑛~ ký tự liền nhau, ký tự thứ ~𝑗~ cho biết trạng thái ô ~(𝑖, 𝑗)~;

## Dữ liệu ra:
- Ghi ra ~4~ số nguyên ~𝑥_1, 𝑦_1, 𝑥_2, 𝑦_2~ cách nhau bởi dấu cách trong đó:
    - ~𝑥_1~: Chỉ số hàng nhỏ nhất;
    - ~𝑦_1~: Chỉ số cột nhỏ nhất;
    - ~𝑥_2~: Chỉ số hàng lớn nhất;
    - ~𝑦_2~: Chỉ số cột lớn nhất của một ô bên trong rào.

## Ví dụ:
## Dữ liệu vào:
```
4 6
..~...
.*.~*.
~.~.~*
.~....
```

#### Dữ liệu ra:
```
3 1 4 5
```

**Chú ý:** Dữ liệu đảm bảo có ít nhất một ô gà.