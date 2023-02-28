package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	for {
		reader := bufio.NewReader(os.Stdin)
		text, _ := reader.ReadString('\n') // 输入
		fmt.Printf("go  %v", text)         // 输出
	}
}
