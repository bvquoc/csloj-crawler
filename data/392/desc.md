Quốc Vương Monarch có nhiều cung tần mỹ nữ, Quốc Vương muốn phong tất cả thành nàng Hậu nhưng các vị nàng Hậu này lại luôn ganh ghét đố kỵ nhau, chính vì vậy mà Quốc Vương phải bố trí các vị nàng Hậu này sống trong những lâu đài sao cho không vị nàng Hậu nào có thể “tấn công” được vị nàng Hậu khác.

Quốc Vương có ~N~ vị nàng Hậu và có ~N^2~ lâu đài xây trên mảnh đất hình vuông ~N×N~ (được đánh số các dòng từ ~1..N~, cột ~1..N~, mỗi ô đất có một lâu đài). Hai nàng Hậu là “tấn công” được nhau nếu hai lâu đài của hai nàng Hậu này nằm trên cùng một hàng hoặc cùng một cột hoặc cùng một đường chéo (nói nôm na thế thôi chứ quy tắc đơn giản như trong trò chơi cờ Vua vậy).

Bạn hãy tìm cách chọn ~N~ lâu đài cho ~N~ vị nàng Hậu này sao cho không vị nàng Hậu nào “tấn công” được nhau nhé (Quốc Vương Monarch sẽ có phần thưởng hậu hĩnh cho vị nào giúp được Quốc Vương).

## Dữ liệu vào:
- Một dòng duy nhất chứa số nguyên dương ~N~

## Dữ liệu ra:
- Dòng đầu ghi số cách chọn lâu đài cho ~N~ vị hoàng Hậu
- Nếu có ít nhất một phương án, dòng thứ hai ghi ra một phương án bất kỳ theo định dạng: ~N~ số nguyên trong đoạn ~[1..N]~, mỗi số cách nhau bởi một dấu cách, số thứ ~i~ là chỉ số dòng của lâu đài trên cột thứ ~i~.

## Ví dụ:
#### Dữ liệu vào:
```
1
```

#### Dữ liệu ra:
```
1
1
```

#### Dữ liệu vào:
```
2
```

#### Dữ liệu ra:
```
0
```

#### Dữ liệu vào:
```
8
```

#### Dữ liệu ra:
```
92
5 7 1 3 8 6 4 2
```

#### Giải thích:
- Với ~N = 8~, có ~92~ phương án, và một phương án trong số đó như hình sau:
<center><img src="/images/problems/392/NQUEENS.jpg" width=300px> </center>

## Giới hạn:
- ~1 ≤ N ≤ 10~