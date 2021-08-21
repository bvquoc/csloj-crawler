**<center>Nguồn:  Free Contest 02</center>**

Bạn đang thiết kế một trò chơi khá đơn giản. Trong trò chơi này người chơi sẽ chọn một xâu kí tự tùy ý độ dài ~N~ và tất cả các chữ cái là `A`, `B`, `C` hoặc `D`. Mỗi xâu này sẽ được tô một màu do bạn lựa chọn. Để giành chiến thắng người chơi cần thao tác một số phép biến đổi để thu được một xâu khác có cùng màu. Ở mỗi bước, một trong hai thao tác sau được phép thực hiện:
- Đổi chỗ ~2~ kí tự kề nhau.
- Thay thế một xâu con ~\text{before}[i]~ của xâu thành xâu ~\text{after}[i]~ với ~i~ nào đó (hai xâu này có cùng độ dài).

Bạn dự định thiết kế trạng thái “Bất khả thi” trong trò chơi này, tức là người chơi không có cách nào chiến thắng bất kể họ chọn xâu nào lúc
đầu. Tính số màu tối thiểu bạn cần để làm được việc này.

**Lưu ý:** đáp số luôn tồn tại do bạn có thể đơn giản tô mỗi xâu độ dài ~N~ với một màu khác nhau.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số ~N~ và ~M~ ~(1 ≤ N ≤ 30, 1 ≤ M ≤ 50)~ lần lượt là độ dài xâu và số lượng cặp ~\text{before}[i], \text{after}[i]~;
- Dòng thứ hai chứa ~M~ xâu ~\text{before}[i]~;
- Dòng thứ ba chứa ~M~ xâu ~\text{after}[i]~;
- Với mỗi ~i~, xâu ~\text{before}[i]~ và ~\text{after}[i]~ có độ dài như nhau. Hơn nữa, các xâu này chỉ chứa các kí tự `A`, `B`, `C`, `D`.

## Dữ liệu ra:
- In ra số màu ít nhất cần sử dụng để tạo ra trạng thái Bất khả thi.

## Ví dụ:
#### Dữ liệu vào:
```
1 1
A
B
```

#### Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
2 3
A A D
B C D
```

#### Dữ liệu ra:
```
5
```

#### Dữ liệu vào:
```
2 3
B C D
C D B
```

#### Dữ liệu ra:
```
9
```

#### Dữ liệu vào:
```
6 6
AABBC AAAADA AAACA CABAA AAAAAA BAAAA
AACCB DAAABC AAAAD ABCBA AABAAA AACAA
```

#### Dữ liệu ra:
```
499
```

#### Giải thích:
- Trong test ví dụ đầu tiên, đương nhiên xâu ~“A”~ và ~“B”~ phải khác màu nhau, nên ít nhất hai màu cần được sử dụng. Đây cũng là phương án tối ưu.