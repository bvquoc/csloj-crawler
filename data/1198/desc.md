**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Tí và Tèo được giao mỗi bạn một quả đồi để trồng cây. Phú ông giao cho hai bạn tất cả ~N~ cây, mỗi cây thuộc một loại khác nhau hoàn toàn và yêu cầu phải trồng hết cả ~N~ cây đã giao. Để đảm bảo vùng đồi trồng được che phủ, Tí cần trồng ít nhất ~x~ cây, Tèo cần trồng ít nhất ~y~ cây.

**Yêu cầu:** Hãy xác định số cách chia cây cho hai bạn mà Phú ông có thể thực hiện.

## Dữ liệu vào:
- Một dòng gồm ba số nguyên dương theo thứ tự ~N,x,y\ (x+y≤N≤10^7)~.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số cách chia có thể thực hiện Vì kết quả có thể quá lớn, bạn cần đưa ra theo số cách theo module cho ~10^9+7~.

## Ví dụ:
#### Dữ liệu vào:
```
4 1 2
```

#### Dữ liệu ra:
```
10
```

#### Giải thích:
Có ~10~ cách chia: ~\{(1),(2,3,4)\};\text{  } \{(2),(1,3,4)\};\text{ }\{(3),(1,2,4)\};\text{    }\{(4),(1,2,3)\};\text{ }\{(1,2),(3,4)\};~
~\{(1,3),(2,4)\};\text{ }\{(1,4),(2,3)\};\text{ }\{(2,3),(1,4)\};\text{ }\{(2,4),(1,3)\};\text{ }\{(3,4),(1,2)\}~

## Giới hạn:
- ~30\%~ số test tương ứng ~30\%~ số điểm có ~N≤10^3~;
- ~30\%~ số test khác tương ứng ~30\%~ số điểm có ~N≤10^7,|N-x-y|≤10~;
- ~40\%~ số test còn lại tương ứng ~40\%~ số điểm có ~N≤10^7~.