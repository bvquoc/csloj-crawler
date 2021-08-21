**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 2 Day 1- Hải Phòng 2020</center>**

Cho một xâu kí tự bao gồm:
- Vị trí lẻ: kí tự chữ số;
- Vị trí chẵn là các dấu `(+, –, *)` tương ứng với các phép toán (cộng, trừ, nhân);

Bạn được chèn các dấu ngoặc vào để được một biểu thức toán học đúng. Hãy cho biết giá trị nhỏ nhất của biểu thức toán học đã cho?

## Dữ liệu vào:
- Một dòng duy nhất chứa xâu ký tự đầu bài (độ dài nhỏ hơn $30$ kí tự).

## Dữ liệu ra:
- Một số duy nhất là kết quả nhỏ nhất của biểu thức toán học. Kết quả có trị tuyệt đối nhỏ hơn $10^{18}$.

## Ví dụ:
#### Dữ liệu vào:
```
1+2-3*4
```

#### Dữ liệu ra:
```
-9
```

#### Giải thích:
- $–9 = 1 + ((2–(3×4))) = 1 + 2 – 3×4$.