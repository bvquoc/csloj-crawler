Người ta dùng máy cắt để cắt một hình chữ nhật có kích thước ~M×N~ thành một số **ít nhất các hình vuông** có kích thước nguyên dương và có các cạnh song song với cạnh hình chữ nhật ban đầu. Máy cắt khi cắt luôn cắt theo phương song song với một trong hai cạnh của hình chữ nhật và chia hình chữ nhật thành hai phần.

## Dữ liệu vào:
- Một dòng duy nhất chứa hai số nguyên dương ~M~ và ~N~ cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là số hình vuông ít nhất cắt được.

## Ví dụ:
#### Dữ liệu vào:
```
5 6
```

#### Dữ liệu ra:
```
5
```

#### Giải thích:
- Ta dùng ~4~ lần cắt như hình dưới đây để được ~5~ hình vuông.
 <center><img src="/images/problems/432/DPCUTREC.png" width=250px></center>

## Giới hạn:
- ~1 ≤ M, N ≤ 1000~.