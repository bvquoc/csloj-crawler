**<center>Nguồn:  Free Contest 03</center>**

Cho một biểu thức có dạng: $x_1 +/- x_2 +/- … +/- x_n$.

Người ta muốn viết lại biểu thức trên bằng cách thêm các dấu ngoặc vào biểu thức có dạng: $x_1 - x_2 - … - x_n$ sao cho biểu thức có giá trị không đổi và biểu thức sau khi thêm là biểu thức ngoặc đầy đủ, tức là  không có biểu thức dạng:  $( ), (x_i), ((...))$ và mỗi dấu ngoặc chỉ trong trực tiếp một dấu ngoặc.

**Chẳng hạn:**
$$x_1 – x_2 – x_3 + x_4 + x_5 – x_6 + x_7 = (((x_1 – x_2) – ((x_3 – x_4) – x_5)) – (x_6 – x_7))$$

Bạn được cho trước biểu thức chỉ gồm các phép toán $+/-$, bạn hãy tính số cách thêm các dấu ngoặc thỏa mãn các yêu cầu trên. Vì số này có thể rất lớn nên bạn chỉ cần lấy phần dư cho $10^9$.

## Dữ liệu vào:
- Dòng đầu ghi số $N$ là số phép toán cộng trừ trong biểu thức $(N ≤ 5000)$;
- Mỗi dòng trong $N$ dòng tiếp theo, mỗi dòng ghi một phép toán $+/-$.

## Dữ liệu ra:
- Ghi một số duy nhất là số cách thêm ngoặc thỏa mãn các yêu cầu (mod $10^9$).

## Ví dụ:
### Dữ liệu vào:
```
7
-
-
+
+
-
+
```

### Dữ liệu ra:
```
3
```