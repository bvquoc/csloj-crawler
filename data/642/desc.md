**<center>Nguồn: Beginner Free Contest 9</center>**

Trong lúc rảnh, Dũng đã quyết định sáng tác một số bài hát bằng tiếng Anh có độ phức tạp ~O(n^2)~ về các con vật được nuôi ở Viện Công nghệ Thực phẩm gần nhà. Đầu tiên, anh liệt kê một dãy ~A[1..n]~ gồm ~n~ cụm từ, mỗi cụm từ mô tả một con vật. Sau đó, anh sử dụng thuật toán sau để sáng tác bài hát.

```C++
Hát Look at the animals, dancing, dancing,
Hát Look at the animals, dancing to the music.
for i từ 1 đến n do
    for j từ i đến 2 do
        Hát xâu A[j]
    end for
    if i > 1 then
        Hát and
    end if
    Hát A[1]
    Hát dancing, dancing,
    Hát Look at the animals, dancing to the music.
end for
```

Để tính xem mình tốn bao nhiêu sức để hát bài hát do mình sáng tác ra, Dũng quyết định đếm số chữ cái tiếng Anh (cả in hoa lẫn in thường) xuất hiện trong bài hát. Hãy viết chương trình giúp Dũng làm điều đó.

## Dữ liệu vào:
- Dòng đầu tiên gồm một số nguyên dương ~n\ (0 ≤ n ≤ 10^5)~ là số cụm từ mà Dũng đã liệt kê ra.
- ~n~ dòng tiếp theo, dòng thứ ~i~ là cụm từ ~A[i]~ mà Dũng sử dụng để mô tả các con vật. Các cụm từ sẽ chỉ chứa các chữ cái tiếng Anh (in hoa hoặc in thường) và dấu cách.

## Dữ liệu ra:
- Gồm một dòng duy nhất chứa một số nguyên là số chữ cái xuất hiện trong bài hát của Dũng. Lưu ý các dấu cách, dấu phẩy, dấu chấm và dấu xuống dòng không được tính vào kết quả.

## Ví dụ:
#### Dữ liệu vào:
```
5
one fat cat
two big elephants
three small bats
four long snakes
five thin bears
```

#### Dữ liệu ra:
```
498
```

#### Giải thích:
- Lời bài hát đầy đủ như sau:
```
Look at the animals, dancing, dancing,
Look at the animals, dancing to the music

One fat cat, dancing, dancing,
Look at the animals, dancing to the music

Two big elephants and one fat cat, dancing, dancing,
Look at the animals, dancing to the music

Three small bats, two big elephants, and one fat cat, dancing, dancing,
Look at the animals, dancing to the music

Four long snakes, three small bats,
Two big elephants, and one fat cat, dancing, dancing,
Look at the animals, dancing to the music

Five thin bears, four long snakes, three small bats
Two big elephants, and one fat cat, dancing, dancing,
Look at the animals, dancing to the music
```

## Giới hạn:
- Dung lượng dữ liệu vào nhỏ hơn ~1~ MB.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)